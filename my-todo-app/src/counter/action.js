import { ADD ,REDUS } from "./actionType"

export const ADDITION=(payload)=>{
    return{type:ADD,payload}
}
export const Reduce=(payload)=>{
    return{type:REDUS,payload}
}