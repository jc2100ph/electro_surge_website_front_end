import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Products from "./pages/Products"
import ProductInfo from './pages/ProductInfo';
import Dashboard from './pages/Dashboard'; 
import CheckOut from "./pages/CheckOut"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/products' element= {<Products />}/>
        <Route path='/buy/:id' element= {<ProductInfo />} />
        <Route path='/dashboard/:id' element={<Dashboard />} />
        <Route path='/checkout/:id' element={<CheckOut />} />
      </Routes>
      <ToastContainer />
    </Router>
    
  )
}

export default App
