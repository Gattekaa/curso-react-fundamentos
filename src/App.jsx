import './App.css'
import React from "react";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import ParOuImpar from './components/condicional/ParOuImpar';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import UsuarioInfo from './components/condicional/Usuarioinfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';


const App =  () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>
            <Card titulo="#12 Contador" color="#424242">
                <Contador numeroInicial={10}/>
            </Card>
            <div className="Cards">
            <Card titulo="#11 Componente Controlado" color="#E45F56">
                <Input />
            </Card>
            <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>
            <Card titulo="#09 Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>
            <Card titulo="#08 Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
            </Card>
            <Card titulo="#07 Desafio Repetição" color="#FF432E">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 Lista Alunos" color="#FF4C65">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Martins">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>
            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
        </div >
    )
}

export default App