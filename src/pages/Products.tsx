import { useEffect, useState } from "react";
import ProductType from "../types/ProductType";
import CategoryType from "../types/CategoryType";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Products() {
    const [Products, setProducts] = useState<ProductType[]>([]);
    const [productName, setProductName] = useState<string>("");
    const [productDescription, setProductDescription] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [CategoryId, setCategoryId] = useState<number>(0);
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isAuthenticated, jwtToken, logout } = useAuth();

    async function getProducts() {
        const response = await axios.get("http://localhost:8081/product", config)
        setProducts(response.data);
    }

    function handleProductName(event: any) {
        setProductName(event.target.value);

    }

    function handleProductDescription(event: any) {

        setProductDescription(event.target.value);

    }

    function handleProductPrice(event: any) {

        setProductPrice(event.target.value);

    }

    function handleProductCategoryId(event: any) {

        setCategoryId(event.target.value);

    }

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    async function loadCategories() {
        const apiResponse = await axios.get("http://localhost:8081/category", config);
        setCategories(apiResponse.data);
    }

    async function addCategory() {
        await axios.post("http://localhost:8081/product", {
            name: productName,
            description: productDescription,
            price: productPrice,
            categoryId: CategoryId


        }, config);
        getProducts();
    }

    useEffect(function () {
        if (isAuthenticated) {
            getProducts();
            loadCategories();
        }

    }, [isAuthenticated])

    const [productEditing, setProductEditing] = useState<ProductType | null>();

    function editProduct(product: ProductType) {
        setProductEditing(product);
        setProductName(product.name);
        setProductPrice(product.price);
        setCategoryId(product.category.id);
        setProductDescription(product.description);
    }

    async function updateProduct() {
        try {
            await axios.put(`http://localhost:8081/product/${productEditing?.id}`, {
                name: productName,
                description: productDescription,
                price: productPrice,
                categoryId: CategoryId
            }, config);
            getProducts();
            setProductEditing(null);
            setProductName("");
            setProductPrice(0);
            setCategoryId(0);
            setProductDescription("");
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteProduct(produtId: number) {
        try {
            await axios.delete(`http://localhost:8081/product/${produtId}`, config);
            getProducts();
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
            

            <div className="bg-[url('./assets/pattern.png')] h-[...]  bg-cover bg-center bg-fixed">
                <h1 className="text-3xl font-semibold mb-5 text-slate-800">Products</h1>

                <table className="table-auto- w-full">
                    <thead>
                        <tr className="bg-slate-200 text-sm font-medium text-slate-600">
                            <th className="p-2 w-[50px] text-left">#</th>
                            <th className="p-2 w-[50px] text-left">Product Name</th>
                            <th className="p-2 w-[50px] text-left">Product Price</th>
                            <th className="p-2 w-[50px] text-left">Category</th>
                            <th className="p-2 w-[50px] text-left"></th>
                            <th className="p-2 w-[50px] text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Products.map(function (product) {
                            return (
                                <tr key={product.id}>
                                    <td className="p-2 text-slate-600 border-b border-slate-200">{product.id}</td>
                                    <td className="p-2 text-slate-600 border-b border-slate-200">{product.name}</td>
                                    <td className="p-2 text-slate-600 border-b border-slate-200">{product.price}</td>
                                    <td className="p-2 text-slate-600 border-b border-slate-200">{product.category.name}</td>
                                    <td> <button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={() => editProduct(product)}>Edit</button></td>
                                    <td> <button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={() => deleteProduct(product.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className="mt-10 max-w-[650px] max-auto border border-slate-200 px-4 py-3 rounded-lg pb-24 pt-24">
                    <h2 className="text-xl font-medium mb-4">{productEditing ? "Edit Product" : "Add Product"}</h2>
                    <div>
                        <label className="text-sm text-slate-600 block mb-3">Enter product name</label>
                        <input type="text" className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" value={productName} onChange={handleProductName} />
                    </div>
                    <div>
                        <label className="text-sm text-slate-600 block mb-3">Enter product description</label>
                        <input type="text" className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" value={productDescription} onChange={handleProductDescription} />
                    </div>
                    <div>
                        <label className="text-sm text-slate-600 block mb-3">Enter product price</label>
                        <input type="text" className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" value={productPrice} onChange={handleProductPrice} />
                    </div>
                    <div>
                        <label className="text-sm text-slate-600 block mb-3">Enter product category</label>
                        <select className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" value={CategoryId} onChange={handleProductCategoryId}>
                            <option value="">Select Category</option>

                            {categories.map(function (category) {
                                return (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )
                            })}
                        </select>
                    </div>


                    {productEditing ? (<button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={updateProduct}>Update Category</button>) : (<button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-slate-950" onClick={addCategory}>Add Category</button>)}
                </div>
            </div>

        </div>
    )
}

export default Products;