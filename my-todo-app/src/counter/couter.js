import { Navbar } from "../pages/navbar"
import { useSelector,useDispatch } from "react-redux"
import { ADDITION ,Reduce} from "./action"
export function Count(){
    const count=useSelector((state)=>state.counterReducer.counter)
    console.log(count)
    const dispatch=useDispatch()
    const h=()=>{
        dispatch(ADDITION(1))
    }
    const h2=()=>{
        dispatch(Reduce(1))
    }
    return(
     <>
     <Navbar/>
     <h1>counter app</h1>
     <p>count: {count}</p>
     <button onClick={h}>Add</button>
     <button onClick={h2}>Reduce</button>
     </>
    )

}