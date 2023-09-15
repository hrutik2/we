import { Post,get } from "./action";

export const postData=(payload)=>{
    return {type:Post,payload}
} 
export const getData=(payload)=>{
    return {type:get,payload}
} 