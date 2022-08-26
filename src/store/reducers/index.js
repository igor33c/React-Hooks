export default function reducer(state, action){
    console.log(state)
    
    /// action.type diff 'number_X...'
    /// action.type same as action.payload
    switch(action.type){

        /// o que é passado pela action pode ser name, number, etc é definido aqui
        case 'login':{           
            return {...state, user: {name: action.payload, age: 33}}
        }
        
        case 'number_addN':{                    
            return {...state, number: state.number + action.payload}
        }

        case 'number_mult7':{
            ///console.log(state.number)
            return {...state, number: state.number * 7 }
        }    
        case 'number_add2':{            
            return {                
                ...state, number: state.number + 2  }
        }          

        case 'number_div25':
            return {...state, number: state.number / 25}
        
        case 'number_parseInt':
            return {...state, number: parseInt(state.number)}
        
        default: 
            return state
    }
}