 const ini={
    counter:0
 }
 
 export const counterReducer=(state=ini,{type,payload})=>{
     switch (type) {
        case "ADD":
            return{...state,counter:state.counter+payload}
        case "REDUS":
            return{...state,counter:state.counter+payload}
        default:
            return state
     }
 }