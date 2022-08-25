import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState ={
    cart:'...',
    products:[],
    user: null,

    ///foco
    number:0,       
}
console.log(initialState)
//*useReducer pegar estado atual e evoluir para cada ação que acontecer
function reducer(state, action){
    console.log(state)
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2  }
        case 'login':
            {
                console.log('ok')
                return {...state, user: {name: action.name, age: 33}}
            }
        
        default: 
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"            
            />
            <div className="center">
                {state.user ?
                    <div className="ok">
                        <span className="text">{state.user.name} </span> <span className="text">Idade: {state.user.age}</span>
                    </div>
                     : 
                    <span className="text">Sem Usuario</span>
                
                }
                <span className="text">{state.number}</span>
                <div>

                    <button className="btn"
                        onClick={() => dispatch({type: 'login', name: 'Maria'})}>Login
                    </button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'number_add2'})}
                    >+2</button>
                    
                </div>
            </div>
        </div>
    )
}

export default UseReducer
