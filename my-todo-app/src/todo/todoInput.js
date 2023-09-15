import axios from "axios"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { postData } from "./actionType"
export const Input=()=>{
    const[title,settitle]=useState("")
    const dispatch=useDispatch()
    const change=(e)=>{
       settitle(e.target.value)
    }
    const add=()=>{
        let obj={
            title:title,
            status:false
        }
       axios.post("http://localhost:8080/Todos",obj)
       .then(res=>dispatch(postData(res.data)))
    }
    return(
        <div>
            <input type="text" placeholder='title' onChange={change} />
            <button onClick={add}>ADD Todo </button>
        </div>
    )
}