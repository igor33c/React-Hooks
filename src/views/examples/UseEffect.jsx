import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFat(num){
    const n = parseInt(num)
    if (n<0) return -1
    if (n===0) return 1
    if (num > 300) return "Infinito"
    return calcFat(n - 1) *n
}

function calcImparPar(num2){
    
    const n2 = parseInt(num2)
    console.log(n2) 
    if(n2 === 0) return "Zero"    
    if(n2 % 2 ===0){
        return "Par"
    }
    else return "Impar"
}
const UseEffect = (props) => {
    ///use effect = efeito colateral quando altera algo e alterado tb
    ///use efffect = efeitos colaterais nao visuais

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [number2, setNumber2] = useState(0)
    const [imparPar, setImparPar] = useState("PAR")

    useEffect(function(){
        setImparPar(calcImparPar(number2))
        console.log(number2)
    }, [number2])

    useEffect(function(){
        setFatorial(calcFat(number))
    }, [number])
    useEffect(function(){
        if (fatorial >1000000){
            document.title='eita!!!'
        }
    }, [fatorial])
    // o number entre colchetes é o motivo para chamar a funcao qdo e alterado
    //setFatorial(calcFat(number)) nao pode chamar aqui ou criar laco infinitio
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #1"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'nao existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #2"/>
            <div className="center">            
                <div>
                    <span className="text">Par Ou Impar: </span>
                    <span className="text red">{imparPar}</span>
                </div>
                <input type="number" className="input" value={number2} onChange={e => setNumber2(e.target.value)} />
            </div>
                
            
        </div>
        
    )
}

export default UseEffect
