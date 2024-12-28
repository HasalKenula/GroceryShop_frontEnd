import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import contacts from "../assets/contacts.png";
import map from "../assets/map.png";
import facebook from "../assets/facebook.png";
import hours from "../assets/hours.png";
import instagram from "../assets/instagram.png";
import viber from "../assets/viber.png";
import whatsapp from "../assets/whatsapp.png";
import { useState } from "react";
function Profile() {

  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>

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
      <div className="bg-[url('./assets/pattern.png')] min-h-screen bg-cover bg-center bg-fixed">
        <h1 className="flex text-3xl font-semibold mb-5 text-slate-800 item-center justify-center pb-8 pt-4">Profile</h1>
        <div className="max-w-[700px] mx-auto p-8 shadow-xl rounded-lg">
          <div className="flex items-center justify-center space-x-10">
            <div className="w-1/6">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <h1>Store Name </h1>
            </div>
            <div className="w-1/6">
              Silvester Gocery Store
            </div>
          </div>

          <div className="flex items-center justify-center space-x-10 pt-8">
            <div className="w-1/6">
              <img src={map} alt="map" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <h1>Location </h1>
            </div>
            <div className="w-1/6">
              "No 23/1,Pettah,
              Colombo 07"
            </div>
          </div>

          <div className="flex items-center justify-center space-x-10 pt-8">
            <div className="w-1/6">
              <img src={hours} alt="hours" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <h1>Opening and Closing Hour </h1>
            </div>
            <div className="w-1/6">
              8.00a.m - 9.00p.m
            </div>
          </div>




          <div className="flex items-center justify-center space-x-10 pt-8">
            <div className="w-1/6">
              <img src={contacts} alt="contacts" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <h1>Contact Number</h1>
            </div>
            <div className="w-1/6">
              0711707436
            </div>
          </div>




          <div className="flex items-center justify-center space-x-10 pt-16 max-w-[600px] mx-auto p-8 shadow-xl rounded-lg">
            <div className="w-1/6">
              <img src={facebook} alt="facebook" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <img src={whatsapp} alt="whatsapp" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <img src={instagram} alt="instagram" className="h-10 w-10 mr-2" />
            </div>
            <div className="w-1/6">
              <img src={viber} alt="viber" className="h-10 w-10 mr-2" />
            </div>

          </div>
        </div>



      </div>

    </div>

  )
}

export default Profile