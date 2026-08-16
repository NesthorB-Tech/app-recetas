import useRecetas from './hooks/useRecetas'
import RecetaList from './components/RecetaList'
import './App.css'

function App() {
  const { recetas, isLoading, error } = useRecetas()

  return (
    <div className="app-container">
      <header className="hero">
        <h1>🍳 Recetario Casero</h1>
        <p>Descubrí y compartí tus recetas favoritas</p>
      </header>

      <main>
        <h2>Recetas registradas</h2>
        <RecetaList recetas={recetas} isLoading={isLoading} error={error} />
      </main>
    </div>
  )
}

export default App