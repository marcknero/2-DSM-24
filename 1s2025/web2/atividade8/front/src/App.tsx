import { MapContainer, TileLayer, Polygon, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FlyToHandler from "./components/FlyToHandler"; // Import the FlyToHandler component

function ClickHandler({ onPointClick }: { onPointClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onPointClick(lat, lng);
    },
  });
  return null;
}

function App() {
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [center, setCenter] = useState<[number, number]>([-14.235, -51.9253]);
  const [zoom, setZoom] = useState<number>(5);
  const [pointData, setPointData] = useState<any | null>(null);
  const [selectedPolygon, setSelectedPolygon] = useState<any | null>(null);
  

  // Busca a lista de cidades ao carregar o componente
  useEffect(() => {
    axios
      .get("http://localhost:3001/censo/cities")
      .then((response) => setCities(response.data))
      .catch((error) => console.error("Erro ao buscar cidades:", error));
  }, []);

  // Atualiza os polígonos ao selecionar uma cidade
  const handleCityChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);

    try {
      const response = await axios.get("http://localhost:3001/censo", {
        params: { city },
      });

      if (!response.data || !response.data.polygons || response.data.polygons.length === 0) {
        //alert("Nenhum dado encontrado para a cidade selecionada.");
        return;
      }

      setPolygons(response.data.polygons);
      setCenter([response.data.centroid.latitude, response.data.centroid.longitude]);
      setZoom(11);
      console.log(zoom, " ", center)
    } catch (error) {
      console.error("Erro ao buscar dados da cidade:", error);
    }
  };

  // Função para buscar os dados do ponto clicado
  const handlePointClick = async (lat: number, lng: number) => {
    try {
      const response = await axios.get("http://localhost:3001/censo/point", {
        params: { y: lat, x: lng },
      });

      if (!response.data) {
       // alert("Nenhum dado encontrado para o ponto clicado.");
        return;
      }

      setPointData(response.data); // Armazena os dados do ponto clicado

      // Identifica o polígono correspondente ao ponto clicado
      const polygon = polygons.find((poly) => {
        if (!poly || !poly.geom) return false; // Verifica se o polígono e o geom são válidos
        return poly.geom.includes(response.data.geom); // Verifica se o polígono contém o ponto
      });

      setSelectedPolygon(polygon || null); // Atualiza o polígono selecionado
    } catch (error) {
      console.error("Erro ao buscar dados do ponto:", error);
    }
  };

  const parseMultiPolygon = (multiPolygon: string) => {
    if (!multiPolygon || typeof multiPolygon !== 'string') {
      console.error('MULTIPOLYGON inválido:', multiPolygon);
      return [];
    }

    return multiPolygon
      .replace('MULTIPOLYGON(((', '')
      .replace(')))', '')
      .split(')),((')
      .map((polygon) =>
        polygon.split(',').map((point) => {
          const [lng, lat] = point.trim().split(' ').map(Number);

          // Valida se lat e lng são números válidos
          if (isNaN(lat) || isNaN(lng)) {
            //console.warn('Coordenada inválida encontrada e ignorada:', { lat, lng });
            return null; // Retorna null para coordenadas inválidas
          }

          return [lat, lng]; // Inverte para [latitude, longitude]
        }).filter((coord) => coord !== null) // Remove coordenadas inválidas
      ).filter((polygon) => polygon.length > 0); // Remove polígonos vazios
  };

  return (
    <div id="map-container">
      {/* Dropdown para selecionar uma cidade */}
      <select
        className="city-selector"
        onChange={handleCityChange}
        value={selectedCity || ""}
      >
        <option value="" disabled>
          Selecione uma cidade
        </option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ClickHandler onPointClick={handlePointClick} />
        <FlyToHandler center={center} zoom={zoom} /> {/* Add the FlyToHandler component here */}
        {polygons.map((polygon, index) => {
          if (!polygon || !polygon.geom) {
            //console.warn("Polígono inválido encontrado e ignorado:", polygon);
            return null; // Ignora polígonos inválidos
          }

          return (
            <Polygon
              key={index}
              positions={parseMultiPolygon(polygon.geom)} // Converte o MULTIPOLYGON
              pathOptions={{
                color: selectedPolygon === polygon ? "red" : "blue", // Destaca o polígono selecionado
                weight: selectedPolygon === polygon ? 5 : 2,
              }}
            />
          );
        })}
      </MapContainer>

      {/* Modal ou mensagem para exibir os dados do ponto clicado */}
      {pointData && (
        <div className="info-modal">
          <p><strong>Código do Setor:</strong> {pointData.cd_setor}</p>
          <p><strong>Situação:</strong> {pointData.situacao}</p>
          <p><strong>Área (km²):</strong> {pointData.area_km2}</p>
          <p><strong>Município:</strong> {pointData.nm_mun}</p>
        </div>
      )}
    </div>
  );
}

export default App;
