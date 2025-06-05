import styled from 'styled-components'
import List from './components/List'
import Map from './components/Map'

// Estilos para o layout principal
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const ListContainer = styled.div`
  width: 20%; /* Define a largura fixa para o List */
  height: 100%; /* Ocupa toda a altura da tela */
  border-right: 1px solid #ccc; /* Adiciona uma borda para separar visualmente */
  box-sizing: border-box;
`

const MapContainer = styled.div`
  flex: 1; /* O mapa ocupará todo o espaço restante */
`

function App() {
  return (
    <AppContainer>
      <ListContainer>
        <List />
      </ListContainer>
      <MapContainer>
        <Map />
      </MapContainer>
    </AppContainer>
  )
}

export default App