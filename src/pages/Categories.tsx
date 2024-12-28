import axios from "axios";
import { useEffect, useState } from "react";
import CategoryType from "../types/CategoryType";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  const { isAuthenticated, jwtToken, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  async function loadCategories() {
    const apiResponse = await axios.get("http://localhost:8081/category", config);
    setCategories(apiResponse.data);
  }

  function handleCategoryName(event: any) {
    setCategoryName(event.target.value);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }

  async function addCategory() {
    await axios.post("http://localhost:8081/category", {
      name: categoryName
    }, config);
    loadCategories();
  }

  useEffect(function () {
    loadCategories();
  }, [isAuthenticated])

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




      <div className="bg-[url('./assets/pattern.png')] h-screen bg-cover bg-center bg-fixed">




        <h1 className="text-3xl font-semibold mb-5 text-slate-800">Categories</h1>
        
        <ul className="m-5">
          {categories.map(category => (
            <li className="inline-block p-2 m-2 border border-slate-500 rounded-lg shadow-lg" key={category.id}>{category.name}</li>
          ))}
        </ul>
        
        <div className="mt-10 max-w-[650px] max-auto border border-slate-200 px-4 py-3 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Add category</h2>
          <label className="text-sm text-slate-600 block mb-3">Enter category name</label>
          <input type="text" className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" onChange={handleCategoryName} />
          <button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={addCategory}>Add Category</button>
        </div>
      </div>



    </div>
  )
}

export default Categories