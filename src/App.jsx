import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import ContactForm from './Component/Footer'
import { useState } from 'react'
import Sidebar from './Component/Slidebar'
import Shop from './Pages/Shop'
import AddToCart from './Component/AddToCart'
import toast from 'react-hot-toast'
import Admin from './Pages/Admin'
import LoginPage from './Component/LoginPage'



function App() {

  const [cartList, setCartList] = useState([]);
  const [addCartOpen, setAddCartOpen] = useState(false);
  const onAddToCart = (product) => {
    if (product.size == '') {
      return toast.error('Plz select size first')
    }

    console.log(product);

    setCartList([...cartList, product])
    console.log(cartList);
    toast.success('Item added in Cart')
  }

  const [isOpen, setIsOpen] = useState(false)

  const sideNavClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen)
    }
  }


  return (
    <>
      <Navbar onOpen={sideNavClose} cartopen={addCartOpen} fun={setAddCartOpen} />
      <AddToCart data={cartList} fun={setAddCartOpen} addtocart={addCartOpen} />
      <Sidebar isOpen={isOpen} onClose={sideNavClose} fun={setIsOpen} />
      <Routes>
        <Route path='/' element={<Home onAddToCart={onAddToCart} />} />
        <Route path='/shop' element={<Shop onAddToCart={onAddToCart} />} />
        <Route path='/admin' element={<LoginPage />} />
        <Route path='/admin-panal' element={<Admin />} />
      </Routes>
      <ContactForm />
    </>
  )
}

export default App
