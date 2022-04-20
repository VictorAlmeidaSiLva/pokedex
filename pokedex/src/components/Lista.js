import React, { useContext } from "react";
import { Context } from '../context/PokemonContext'
import ListaItem from './ListaItem'

function Lista() {
    const { pokemon, pokemons, proximos, selecionar } = useContext(Context);
    return (
        <div className="Lista">
            <div className="list-group">
                {pokemons.map(p => (
                    <a href="#" key={p.name}
                        className={'list-group-item list-group-item-action ' + (p == pokemon ? 'active' : '')}
                        onClick={() => selecionar(p)}>
                        <ListaItem pokemon={p} />
                    </a>
                ))}
                <a href="#"
                    className="list-group-item list-group-item-action"
                    onClick={() => proximos()}>Mais</a>
            </div>
        </div>
    )
}


export default Lista
