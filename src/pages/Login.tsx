import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


function Login() {
    const[username,setUsername]=useState<string>("");
    const[password,setPassword]=useState<string>("");

    const[error,setError]=useState<string>("");
    const{login}=useAuth();
    const navigate=useNavigate();

    async function handelSubmit() {
        if(username===""||password===""){
            setError("Please Enter valid user name and password");
        }

        try {
            const data={
                username:username,
                password:password
            }

            const response=await axios.post("http://localhost:8081/auth/login",data);
            login(response.data);
            navigate("/");
        } catch (error) {
           setError("Your user name and password canot be validate") ;
        }
    }
    return (
        <div className="py-10 px-5 bg-[url('./assets/pattern.png')] h-screen bg-cover bg-center bg-fixed">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                <span className="text-white text-xl font-bold">Silvester Grocery Store</span>
            </div>

            <div className="max-w-[600px] mx-auto p-8 shadow-xl rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Login</h1>
                </div>


                <form>
                    <div className="mb-3">
                        <label className="mb-1 black">User Name</label>
                        <input type="text" onChange={function(event){
                            setUsername(event.target.value);
                            setError("");
                        }} className="w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter your username" />

                    </div>

                    <div className="mb-3">
                        <label className="mb-1 black">Password</label>
                        <input type="password" onChange={function(event){
                            setPassword(event.target.value);
                            setError("");
                        }} className="w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter your password" />

                    </div>
                    {error && <div className="text-sm text-red-500">{error}</div>}

                    <div className="mb-3">
                        <button type="button" onClick={handelSubmit} className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950">Login</button>
                        

                    </div>

                    <div className="mb-3">
                    
                        <Link to="/register"  className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950 ">Register</Link>

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Login;