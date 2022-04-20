import React, { useContext, useEffect } from "react";
import { Context } from "../context/PokemonContext";
import Detalhe from "../components/Detalhe";
import Lista from "../components/Lista";

function ListaPage() {
    const { pokemon, consultar } = useContext(Context);

    useEffect(() => {
        consultar();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {pokemon && (
                        <Detalhe pokemon={pokemon} />
                    )}
                </div>
                <div className="col-md-4 overflow-auto vh-100">
                    <Lista />
                </div>
            </div>
        </div>
    )
}

export default ListaPage;