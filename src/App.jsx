import React from "react";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Aleatorio 
                min="1"
                max="100"
            />

            <Fragmento />
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"
                nota={9.3}
            />
            <Primeiro></Primeiro>

        </div>
    )
}