
import { Link } from "react-router-dom";
export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <Link to="/">Home</Link>
                <Link to="/counter">counter</Link>
                <Link to="/todo">todo</Link>
            </div>
        </nav>
      
    )

}