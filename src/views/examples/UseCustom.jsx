import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { UseCounter } from '../../hooks/UseCounter'
import { UseFetch } from '../../hooks/UseFetch'

const UseRef = (props) => {

    const [count, inc, dec] = UseCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = UseFetch(url)

    function showStates(states){
        
        return states.map(state=> <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicios #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick ={() => inc()}
                    >+1</button>
                    <button className="btn"
                        onClick ={() => dec()}
                    >-1</button>
                </div>                
            </div>
            <SectionTitle title="Exercicios #02"/>
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>

            </div>
        </div>
    )
}

export default UseRef
