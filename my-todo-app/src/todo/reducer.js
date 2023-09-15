const ini={
    TODO:[]
}

export const todoReducer=(state=ini,{type,payload})=>{
    switch (type) {
       case "get":
           return{...state,TODO:payload}
       case "post":
           return{...state,TODO:[...state.TODO,payload]}
       default:
           return state
    }
}