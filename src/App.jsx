import SideBAr from "./Components/sideBar/SideBAr"
import TopNavBar from "./Components/topnavbar/TopNavBar"
import './App.css'
import Home from "./Pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from "./Pages/userList/UserList"
import User from "./Pages/user/User"
import NewUser from "./Pages/newUser/NewUser"
import ProductList from "./Pages/productList/ProductList"
import Product from "./Pages/product/Product"
import NewProduct from "./Pages/newProduct/NewProduct"

function App() {

  return (
    <>
      <Router>
        <TopNavBar />
        <div className="container">
          <SideBAr />
          <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/users" element={ <UserList/> } />
          <Route path="/users/:userId" element={ <User/> } />
          <Route path="/newUser" element={ <NewUser/> } />
          <Route path="/products" element={ <ProductList/> } />
          <Route path="/product/:productId" element={ <Product/> } />
          <Route path="/newProduct" element={ <NewProduct/> } />

          



          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
