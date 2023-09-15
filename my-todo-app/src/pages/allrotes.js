import { Route,Routes } from "react-router";

import { Home } from "./home";
import { Count } from "../counter/couter";
import { Todo } from "../todo/todo";
export function Allroutes(){
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Count/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    )
}