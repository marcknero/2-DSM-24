import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { DataProvider, useDataContext } from './contexts/DataContext';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const { data } = useDataContext();
  const [cityName, setCityName] = useState<string>(''); // Nome da cidade digitado pelo usuário
  const [polygons, setPolygons] = useState<any[]>([]); // Polígonos da cidade
  const [center, setCenter] = useState<[number, number]>([-14.235, -51.9253]); // Centro do mapa (Brasil por padrão)
  const [zoom, setZoom] = useState<number>(5); // Zoom inicial do mapa

  const handleCitySearch = async () => {
    if (!cityName) {
      alert('Por favor, digite o nome de uma cidade.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/censo`, {
        params: { city: cityName },
      });

      if (!response.data || !response.data.polygons || response.data.polygons.length === 0) {
        alert('Nome da cidade errado, ou inexistente no banco de dados');
        return;
      }

      console.log('Dados retornados pela API:', response.data); // Log para depuração

      // Atualiza os polígonos, o centro do mapa e o zoom
      setPolygons(response.data.polygons);
      setCenter([response.data.centroid.latitude, response.data.centroid.longitude]);
      setZoom(12); // Define o zoom para 12 ao buscar uma cidade
    } catch (error) {
      console.error('Erro ao buscar polígonos:', error);
      alert('Erro ao buscar dados da cidade. Verifique o nome e tente novamente.');
    }
  };

  // Função para converter MULTIPOLYGON em coordenadas
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
      {/* Campo de entrada para digitar o nome da cidade */}
      <div className="city-search">
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleCitySearch}>Buscar</button>
      </div>

      <MapContainer
        center={center} // Centraliza o mapa na cidade
        zoom={zoom} // Usa o estado de zoom
        style={{ height: '100vh', width: '100vw' }}
        key={`${center[0]}-${center[1]}-${zoom}`} // Força re-renderização ao alterar centro ou zoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {polygons.map((polygon, index) => {
          const parsedPolygon = parseMultiPolygon(polygon.geom);
          if (!parsedPolygon || parsedPolygon.length === 0) {
            //console.warn('Polígono inválido encontrado e ignorado:', polygon);
            return null; // Ignora polígonos inválidos
          }
          return (
            <Polygon
              key={index}
              positions={parsedPolygon} // Converte o MULTIPOLYGON
            />
          );
        })}
        <MapWithClickHandler />
      </MapContainer>
      {data && (
        <div className="info-modal">
          <p>
            <strong>Código do Setor:</strong> {data.cd_setor}
          </p>
          <p>
            <strong>Situação:</strong> {data.situacao}
          </p>
          <p>
            <strong>Área (km²):</strong> {data.area_km2}
          </p>
          <p>
            <strong>Município:</strong> {data.nm_mun}
          </p>
        </div>
      )}
    </div>
  );
}

function MapWithClickHandler() {
  const { setData } = useDataContext();

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      try {
        const response = await axios.get(`http://localhost:3001/censo/point`, {
          params: { y: lat, x: lng },
        });
        console.log('Dados do ponto clicado:', response.data); // Log para depuração
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do ponto:', error);
      }
    },
  });

  return null;
}

export default function AppWithProvider() {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}
