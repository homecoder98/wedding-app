import React, { useEffect, useState } from 'react'
import { Container } from '@/styles/App-styled'
import FullScreenMessage from '@/components/shared/FullScreenMessage'

function App() {
  const [wedding, setWedding] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  return <Container>{JSON.stringify(wedding)}</Container>
}

export default App
