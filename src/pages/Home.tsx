import { useState } from 'react'
import Student from '../components/Student'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from "../assets/logo.png";
import gocery from "../assets/gocery.png";

function Home() {
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

  const { isAuthenticated, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[url('./assets/pattern.png')] h-[...] bg-cover bg-center bg-fixed">
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


      {/* 
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
</div> */}


      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}

          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-white text-xl font-bold">Silvester Grocery Store</span>
          </div>

          <button
            className="block lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>


          {/* Navigation Links */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:space-x-6 bg-gray-800 lg:bg-transparent absolute lg:static top-16 left-0 w-full lg:w-auto z-10`}>
            <Link to="/" className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              Home
            </Link>
            <Link to="/products" className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              Products
            </Link>
            <Link to="/categories" className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              Categories
            </Link>
            <Link to="/orders" className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              Orders
            </Link>
            <Link to="/orders/create" className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              Create to Orders
            </Link>
            <Link to="/profile" className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              Profile
            </Link>
            <div className="block lg:inline-block text-white hover:text-gray-400 px-4 py-2">
              {isAuthenticated ? <button type='button' onClick={logout}>Logout</button> : "Not Logged in"}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-between">
        <div className="w-1/2 p-4 pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-9xl font-semibold text-center text-white mt-8 " style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)' }}>
            Silvester
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mt-8" style={{ textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)' }}>
            Grocery Store
          </h1>
          <p className='pt-8 text-slate-800'>Welcome to Silvester Grocery Shop, your one-stop destination for the best products at unbeatable prices. Whether you're looking for trendy fashion, the latest electronics, home essentials, or something unique, we've got you covered. Our online shop offers a wide range of categories, each carefully curated to meet your needs.</p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-center items-center h-screen">
            <img src={gocery} alt="Description" className='pb-8' />
          </div>
        </div>
      </div>




    </div>



  )
}

export default Home