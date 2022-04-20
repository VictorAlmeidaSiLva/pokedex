import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import PokemonContext from "./context/PokemonContext";
import ListaPage from './pages/ListaPage'


function App() {
  return (
    <div className="App">
      <PokemonContext>
        <ListaPage />
      </PokemonContext>

    </div>
  )
}

export default App;
