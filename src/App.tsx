import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #ea7664;
`

function App() {
  const [wedding, setWedding] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return <Container>{JSON.stringify(wedding)}</Container>
}

export default App
