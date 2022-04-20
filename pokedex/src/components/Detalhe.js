import React, { useEffect, useState } from 'react';
import { POKEMON_API } from '../Settings';
import Card from './Card';

function Detalhe({ pokemon }) {
    const [item, setItem] = useState();

    useEffect(() => {
        (
            async () => {
                const req = await fetch(`${POKEMON_API}/pokemon-form/${pokemon.name}/`);
                setItem(await req.json());
            }
        )();
    }, [pokemon]);

    if (!item) return "Carregando ...";

    return (
        <div className="Detalhe">
            <Card pokemon={item} />
        </div>
    )
}

export default Detalhe;