import React, { createContext, useState } from 'react';
import { POKEMON_API } from '../Settings';

export const Context = createContext();

function PokemonContext({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState();
    const [pokemon, setPokemon] = useState();

    const consultar = async () => {
        const req = await fetch(`${POKEMON_API}/pokemon`);
        const data = await req.json();
        setNext(data.next);
        setPokemons(data.results);
    }

    const proximos = async () => {
        const req = await fetch(next);
        const data = await req.json();
        setNext(data.next);
        setPokemons([...pokemons, ...data.results]);
    }

    const selecionar = (pokemon) => {
        setPokemon(pokemon);
    }

    return (
        <Context.Provider value={{ pokemon, pokemons, consultar, proximos, selecionar }}>
            {children}
        </Context.Provider>
    )
}

export default PokemonContext;