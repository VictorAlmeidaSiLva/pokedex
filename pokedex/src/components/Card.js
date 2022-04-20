import React from "react";

function Card({ pokemon }) {
    return (
        <div className="Card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="foto do pokemon" />
        </div>

    )
}

export default Card