import './App.css';
import Background from "./assets/background.avif";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((pokemon) => setPokemon(pokemon));
  }, [])
  return (
    <img src={Background} alt="background de fundo" />
  )
}

export default App
