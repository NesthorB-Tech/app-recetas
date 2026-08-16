import { useState, useEffect } from 'react'
import { getRecetas, createReceta } from '../services/recetasService'

function useRecetas() {
  const [recetas, setRecetas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function loadRecetas() {
      try {
        setIsLoading(true)
        setError(null)
        const data = await getRecetas()
        if (isMounted) {
          setRecetas(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadRecetas()

    return () => {
      isMounted = false
    }
  }, [])

  async function addReceta(nuevaReceta) {
    const created = await createReceta(nuevaReceta)
    // Inserción optimista: la agregamos al inicio de la lista local
    setRecetas((prev) => [created, ...prev])
  }

  return { recetas, isLoading, error, addReceta }
}

export default useRecetas