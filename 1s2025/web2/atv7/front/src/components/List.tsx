import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Estilos com styled-components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  overflow-y: auto; /* Adicionado para permitir rolagem caso a lista seja maior que o container */
`

const CityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
`

const CityItem = styled.li`
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`

function List() {
  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/cidade') // Substitua pela URL correta do servidor
      .then((response) => response.json())
      .then((data) => {
        const sortedCities = data.map((cidade: { nome: string }) => cidade.nome).sort()
        setCities(sortedCities)
      })
      .catch((error) => console.error('Erro ao buscar cidades:', error))
  }, [])

  return (
    <Container>
      <CityList>
        {cities.map((city, index) => (
          <CityItem key={index}>{city}</CityItem>
        ))}
      </CityList>
    </Container>
  )
}

export default List