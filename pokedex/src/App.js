import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState();
  const [pokemon, setPokemon] = useState();

  const proximos = async () => {
    const req = await fetch(next);
    const data = await req.json();
    setNext(data.next);
    setPokemons([...pokemons, ...data.results]);
  }

  const selecionar = (pokemon) => {
    setPokemon(pokemon);
  }


  useEffect(() => {
    (
      async () => {
        const req = await fetch("http://pokeapi.co/api/v2/pokemon");
        const data = await req.json();
        setNext(data.next);
        setPokemons(data.results);
      }
    )();
  }, []);

  return (
    <div className="App">
      <div className="container" ></div>
      <h1>Pokedex</h1>
      <div className="row">
        <div className="col">
          {pokemon && (
            <Detalhe pokemon={pokemon} />)}
        </div>
        <div className="col">
          <Lista pokemons={pokemons} onNext={proximos} onSelecionar={selecionar} />
        </div>
      </div>
    </div>
  )
}

function Lista({ pokemons, onNext, onSelecionar }) {
  return (
    <div className="Lista">
      <h2>Pokemons</h2>
      <div className="list-group">
        {pokemons.map(p => (
          <a className="list-group-item list-group-item-action" onClick={() => onSelecionar(p)} ><ListaItem pokemon={p} /></a>
        ))}
        <a className="list-group-item list-group-item-action" onClick={onNext}> Mais </a>
      </div>
    </div>

  )
}

function ListaItem({ pokemon }) {
  const [item, setItem] = useState();

  useEffect(() => {

    (async () => {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon.name}`);
      setItem(await req.json());
    }
    )();

  }, [pokemon]);

  if (!item) return "carregando....";

  return (
    <div>
      <img src={item.sprites.front_default} alt="pokemon" />
      {pokemon.name}
    </div>
  )
}

function Detalhe({ pokemon }) {

  const [item, setItem] = useState();

  useEffect(() => {

    (async () => {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon.name}`);
      setItem(await req.json());
    }
    )();

  }, [pokemon]);

  if (!item) return "carregando....";


  return (
    <div className="Detalhe">
      <Card pokemon={item} />
    </div>
  )
}

function Card({ pokemon }) {
  return (
    <div className="Card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
    </div>

  )
}

export default App;
