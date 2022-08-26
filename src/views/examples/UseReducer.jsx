import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store/config'
import { number_add2, login } from '../../store/actions'

//*useReducer pegar estado atual e evoluir para cada ação que acontecer


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
                        onClick={() => login(dispatch, 'Joao')}>Login
                    </button>
                   
                    <button className="btn"
                        onClick={() =>number_add2(dispatch)}
                    >+2</button>
                </div>
            </div>
        </div>
    )
}

/*                    <button className="btn"
                                            onClick={() => dispatch({type: 'number_addN', payload: -9})}>-9
                                        </button>
                    <button className="btn" 
                        onClick={() => dispatch({type: 'number_mult7' })}
                    >*7</button>
                    <button className="btn" 
                        onClick={() => dispatch({type: 'number_div25' })}
                    >/25</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'number_parseInt'})}
                    > Tornar Inteiro</button>
*/
/* codigo antigo 
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
        case 'login':
            {
                console.log('ok')
                return {...state, user: {name: action.name, age: 33}}
            }

            case 'number_mult7':{
                console.log(state.number)
                return {...state, number: state.number * 7 }
            }    
            case 'number_add2':{
                return {...state, number: state.number + 2  }
            }          

            case 'number_div25':
                return {...state, number: state.number / 25}
            
            case 'number_parseInt':
                return {...state, number: parseInt(state.number)}
            
            default: 
                return state
    }
}

*/
export default UseReducer
