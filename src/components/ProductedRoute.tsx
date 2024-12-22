import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProductedRoute(){
    const {isAuthenticated,loading }=useAuth();

    if(! loading){

    if(isAuthenticated){
        return(
            <Outlet/>
        )
    }else{
        return(
            <Navigate to="/login"/>
        )
    }

    }    
    
}

export default ProductedRoute;