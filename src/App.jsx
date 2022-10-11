import React from "react";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Card titulo="#04 Desafio Aleatório">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 ragmento">
                <Fragmento />
            </Card>
            <Card titulo="#02 Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>
            <Card titulo="#01 Primeiro Componente">
                <Primeiro />
            </Card>


        </div>
    )
}