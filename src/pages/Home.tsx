import { useState } from 'react'
import Student from '../components/Student'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home(){
//     const [counter, setCounter] = useState<number>(0);
//  const [username, setUsername] =useState<string>("");

//  function increase(){
//   const newCount =counter + 1;
//   setCounter(newCount);
//  }

//  function decrease(){
//   const newCount=counter - 1;
//   setCounter(newCount);
//  }

//  function handleUsername(event:any){
//   setUsername(event.target.value);
//  }

 const{isAuthenticated,login,logout}=useAuth();

  return (
    <div className="bg-[url('./assets/pattern.png')] h-screen bg-cover bg-center bg-fixed">
      {/* <h1>{counter}</h1>
      <h1>Welcome {username}</h1>
      <Link to="/profile">Profile</Link>
      <Link to="/products">Profile</Link> */}
{/* 
    <Link to="/products"  className="bg-gray-800 text-white px-5 py-2 m-2 ">Product</Link>
            <Link to="/categories"  className="bg-gray-800 text-white px-5 py-2 m-2">Category</Link>
         <Link to="/orders/create"  className="bg-gray-800 text-white px-5 py-2 m-2">Order</Link>
            */}


      {/* <button onClick={()=>login("text_token")} className='px-3 py-2 bg-gray-800 text-white'>Login</button> */}
      {/* {isAuthenticated ? <button type='button' onClick={logout}>Logout</button>:"Not Logged in"} */}
      {/* <div>
        <p>Loging with user name</p>
        <input type="text" onChange={handleUsername}/>
      </div>
      <button  onClick={increase}>Increase counter</button>
      <button onClick={decrease}>decrease counter</button>
      
      <Student name="kamal" age={23}/>
      <Student name="kamal" age={23}/> */}



<div className="flex justify-center items-center min-h-screen ">
  <div className="grid grid-cols-2 gap-10 p-10 border border-gray-300 rounded-lg  shadow-md">
    <div className="p-10 border border-gray-200 rounded-md text-center">
    <Link to="/profile"  className="bg-gray-800 text-white px-5 py-2 m-2 "> profile</Link>
    </div>
    <div className="p-10 border border-gray-200 rounded-md text-center">
    <Link to="/products"  className="bg-gray-800 text-white px-5 py-2 m-2 ">Product</Link>
    </div>
    <div className="p-10 border border-gray-200 rounded-md text-center">
    <Link to="/categories"  className="bg-gray-800 text-white px-5 py-2 m-2">Category</Link>
    </div>
    <div className="p-10 border border-gray-200 rounded-md text-center">
    <Link to="/orders"  className="bg-gray-800 text-white px-5 py-2 m-2">Order</Link>
    </div>
    <div className="p-10 border border-gray-200 rounded-md text-center">
    <Link to="/orders/create"  className="bg-gray-800 text-white px-5 py-2 m-2"> create to Order</Link>
    </div>
    <div className="p-10 border border-gray-200 rounded-md text-center">
    {isAuthenticated ? <button type='button' onClick={logout}>Logout</button>:"Not Logged in"}
    </div>
  </div>
</div>




    </div>


        
  )
}

export default Home