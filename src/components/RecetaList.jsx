import RecetaCard from './RecetaCard'

function RecetaList({ recetas, isLoading, error }) {
  // Estado de carga
  if (isLoading) {
    return <p className="status-text">Cargando recetas...</p>
  }

  // Estado de error
  if (error) {
    return (
      <div className="error-banner" role="alert">
        <strong>Error al cargar las recetas:</strong> {error}
      </div>
    )
  }

  // Estado vacío
  if (recetas.length === 0) {
    return <p className="empty-state">Todavía no hay recetas registradas. ¡Agregá la primera!</p>
  }

  // Estado de éxito
  return (
    <div className="receta-grid">
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} receta={receta} />
      ))}
    </div>
  )
}

export default RecetaList