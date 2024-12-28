import { useEffect, useState } from "react"
import OrderType from "../../types/OrderType"
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Orders() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { isAuthenticated, jwtToken, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function loadOrder() {
    try {
      const response = await axios.get("http://localhost:8081/orders", config)
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }


  useEffect(function () {
    loadOrder();
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


      <div className="bg-[url('./assets/pattern.png')] min-h-screen bg-cover bg-center bg-fixed">
        <h1 className="text-3xl font-semibold mb-5 text-slate-800">Orders</h1>


        <table className="table-auto- w-full">
          <thead>
            <tr className="bg-slate-200 text-sm font-medium text-slate-600">
              <th className="p-2 w-[50px] text-left">#</th>
              <th className="p-2 w-[50px] text-left">Date</th>
              <th className="p-2 w-[50px] text-left">Total Price</th>

            </tr>
          </thead>
          <tbody>
            {orders.map(function (order) {
              return (
                <tr key={order.id}>
                  <td className="p-2 text-slate-600 border-b border-slate-200">{order.id}</td>
                  <td className="p-2 text-slate-600 border-b border-slate-200">{order.orderDateTime}</td>
                  <td className="p-2 text-slate-600 border-b border-slate-200">{order.totalPrice}</td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )

}

export default Orders