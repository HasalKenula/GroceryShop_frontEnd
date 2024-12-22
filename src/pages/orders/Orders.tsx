import { useEffect, useState } from "react"
import OrderType from "../../types/OrderType"
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function Orders(){
    const [orders,setOrders]=useState<OrderType[]>([]);
     const{isAuthenticated,jwtToken}=useAuth();

    async function loadOrder() {
       try {
        const response=await axios.get("http://localhost:8081/orders",config)
        setOrders(response.data);
       } catch (error) {
        console.log(error);
       }
    }

    const config={
        headers:{
            Authorization:`Bearer ${jwtToken}`
        }
    }


    useEffect(function (){
        loadOrder();
    },[isAuthenticated])

    return(
        <div className="container mx-auto pt-5 pb-5 bg-[url('./assets/pattern.png')] h-[...] bg-cover bg-center bg-fixed">
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
                   {orders.map (function (order){
                    return(
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


    )
}

export default Orders