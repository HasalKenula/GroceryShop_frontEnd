import { useEffect, useState } from "react";
import ProductType from "../../types/ProductType";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

function CreateOrder() {

  const [Products, setProducts] = useState<ProductType[]>([]);
  const { isAuthenticated, jwtToken, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  async function getProducts() {
    const response = await axios.get("http://localhost:8081/product", config)
    setProducts(response.data);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }


  useEffect(function () {
    getProducts();

  }, [isAuthenticated])

  const [orderedProducts, setOrderedProduct] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function addProductToOrder(product: ProductType) {

    const newArray = [...orderedProducts, product]
    setOrderedProduct(newArray);
  }

  useEffect(function () {
    orderedProducts.map(function (product) {
      const total = totalPrice + product.price;
      setTotalPrice(total);
    });

  }, [orderedProducts]);

  const navigate = useNavigate();

  async function saveOrder() {
    try {
      const productIds: any = [];
      orderedProducts.map(function (product) {
        productIds.push(product.id);
      });

      await axios.post("http://localhost:8081/orders", {
        productIds: productIds
      }, config);

      navigate("/orders");
    } catch (error) {
      console.log(error);
    }

  }

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


      <div className="flex bg-[url('./assets/pattern.png')] min-h-screen bg-cover bg-center bg-fixed">
        <div className="p-2 w-[300px] border-slate-100">
          <div className="text-xl text-slate-800 font-semibold">
            Products

          </div>
          <div className="mt-5">
            {/*display product list hear*/}

            {Products.map(function (product) {
              return (
                <div onClick={() => addProductToOrder(product)} className="p-3 mb-3  border border-slate-200 rounded-lg" key={product.id} >

                  <div className="text-lg font-semibold text-slate-800 ">{product.name}</div>
                  <div className="text-sm text-slate-600 ">{product.category.name}</div>
                  <div className="text-sm text-right text-green-600 ">Rs.{product.price}</div>

                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full p-2">
          <div className="text-xl text-slate-800 font-semibold mb-5">
            New Order
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                <th className="p-2 w-[50px] text-left">#</th>
                <th className="p-2 w-[300px] text-left">Product</th>
                <th className="p-2 w-[300px] text-left text-right">Total Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderedProducts.map(function (product) {
                return (
                  <tr key={product.id}>
                    <td >{product.id}</td>
                    <td >{product.name}</td>
                    <td className="text-right">{product.price}</td>

                  </tr>
                )
              })}
              <tr>
                <td className="font-semibold" colSpan={2}>
                  Grand Total
                </td>
                <td className="font-semibold text-right">{totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5">
            <button type="button" onClick={saveOrder} className="rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950">Save Order</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default CreateOrder;