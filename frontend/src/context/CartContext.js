import React, { useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage.js"
import { fetchPerfumes } from "../util/apiCalls.js";
/* import storeItems from "../items.json" */
/* import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log({API_URL});
axios.defaults.baseURL = API_URL;  */
const CartContext = React.createContext() 

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [perfumeItems, setPerfumeItems] = useState([]);
  useEffect(()=>{
    const getItems = async ( ) => {
      /* const res = await axios.get('/perfumes'); */
      const res = await fetchPerfumes()
       console.log(res.data); 
       setPerfumeItems(res.data);
    }
    getItems()
  },[]) 
  const [cart, setCart] = useLocalStorage("cart", []) 
  const [showCartItems, setShowCartItems] = useState(false)
  const formattedCart = cart.map(entry => {
    return { ...entry, item: perfumeItems.find(item => item.id === entry.itemId) }
  })
  const isCartEmpty = cart.length === 0

  useEffect(() => {
    if (isCartEmpty) setShowCartItems(false)
  }, [isCartEmpty])

  function addToCart(itemId, quantity = 1) {
    setCart(prevCart => {
      if (prevCart.some(entry => entry.itemId === itemId)) {
        return prevCart.map(entry => {
          if (entry.itemId === itemId)
            return { ...entry, quantity: entry.quantity + quantity }
          return entry
        })
      } else {
        return [...prevCart, { itemId, quantity }]
      }
    })
  }

  function removeFromCart(itemId) {
    setCart(prevCart => {
      return prevCart.filter(entry => entry.itemId !== itemId)
    })
  }

  function checkout() {
    setCart([])
   
  }

  const value = {
    cart: formattedCart,
    showCart: !isCartEmpty,
    showCartItems,
    setShowCartItems,
    isCartEmpty,
    addToCart,
    removeFromCart,
    checkout, 
    perfumeItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
