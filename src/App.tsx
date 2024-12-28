import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Orders from './pages/orders/Orders'
import CreateOrder from './pages/orders/CreateOrder'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import ProductedRoute from './components/ProductedRoute'
import Register from './pages/Register'




function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProductedRoute/>}>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
         
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/orders/create' element={<CreateOrder/>}/>
          
          </Route>

          
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
        </Routes>
      </BrowserRouter>
  
    </AuthProvider>

        
  )
}



export default App
