import { useEffect, useState } from "react";
import ProductType from "../../types/ProductType";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function CreateOrder(){

    const [Products,setProducts]=useState<ProductType[]>([]);
    const{isAuthenticated,jwtToken}=useAuth();

    async function getProducts() {
        const response = await axios.get("http://localhost:8081/product",config)
        setProducts(response.data);
    }

    const config={
        headers:{
            Authorization:`Bearer ${jwtToken}`
        }
    }


    useEffect(function () {
        getProducts();
       
    },[isAuthenticated])

    const[orderedProducts,setOrderedProduct]=useState<ProductType[]>([]);
    const[totalPrice,setTotalPrice]=useState<number>(0);

    function addProductToOrder(product:ProductType){
        // orderedProducts.push(product);
        // console.log(orderedProducts);
        const newArray=[...orderedProducts,product]
        setOrderedProduct(newArray);
    }

    useEffect(function () {
       orderedProducts.map(function(product){
        const total=totalPrice+product.price;
        setTotalPrice(total);
       });
       
    },[orderedProducts]);

    const navigate =useNavigate();

    async function saveOrder() {
        try {
            const productIds:any =[];
            orderedProducts.map(function(product){
                productIds.push(product.id);
            });

            await axios.post("http://localhost:8081/orders",{
                productIds: productIds
            },config);

            navigate("/orders");
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <div className="flex bg-[url('./assets/pattern.png')] h-[...] bg-cover bg-center bg-fixed">
            <div className="p-2 w-[300px] border-slate-100">
                <div className="text-xl text-slate-800 font-semibold">
                    Products

                </div>
                <div className="mt-5">
                    {/*display product list hear*/}

                    {Products.map (function (product){
                    return(
                        <div  onClick={()=>addProductToOrder(product)} className="p-3 mb-3  border border-slate-200 rounded-lg" key={product.id} >
                            
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
                        <th className="p-2 w-[50px] text-left">Product</th>
                        <th className="p-2 w-[50px] text-left text-right">Total Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {orderedProducts.map (function (product){
                    return(
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
                <button type="button" onClick={saveOrder}>Save Order</button>
            </div>
                </div>
            </div>
        
    )
}

export default CreateOrder;