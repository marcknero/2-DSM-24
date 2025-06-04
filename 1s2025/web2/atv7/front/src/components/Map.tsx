import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface City {
  nome: string
  latitude: number
  longitude: number
}

const Map = () => {
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<City | null>(null)

  useEffect(() => {
    // Fetch para obter os dados das cidades do servidor
    fetch('http://localhost:3001/cidade') // Substitua pela URL correta do servidor
      .then((response) => response.json())
      .then((data) => {
        // Filtrar cidades com latitude e longitude válidas
        const validCities = data.filter(
          (cidade: City) => cidade.latitude !== undefined && cidade.longitude !== undefined
        )
        setCities(validCities)
      })
      .catch((error) => console.error('Erro ao buscar cidades:', error))
  }, [])

  return (
    <MapContainer center={[-23.55052, -46.633308]} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city, index) => (
        city.latitude !== undefined && city.longitude !== undefined && ( // Verificação adicional
          <Marker
            key={index}
            position={[city.latitude, city.longitude]}
            eventHandlers={{
              click: () => {
                setSelectedCity(city)
              },
            }}
          >
            <Popup>{city.nome}</Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  )
}

export default Map