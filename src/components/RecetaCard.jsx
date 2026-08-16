function RecetaCard({ receta }) {
  return (
    <div className="receta-card">
      {receta.imagen_url && (
        <img src={receta.imagen_url} alt={receta.nombre} className="receta-imagen" />
      )}
      <div className="receta-info">
        <h3>{receta.nombre}</h3>
        <span className="receta-categoria">{receta.categoria}</span>
        <p>{receta.descripcion}</p>
        <span className="receta-tiempo">⏱ {receta.tiempo_preparacion} min</span>
      </div>
    </div>
  )
}

export default RecetaCard