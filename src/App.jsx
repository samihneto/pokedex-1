import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((pokemon) => setPokemon(pokemon));
  }, [])
  return (
    <article></article>
  )
}

export default App
