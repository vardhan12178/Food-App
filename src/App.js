import Header from './components/Header'

import Cart from './components/Cart';
import { useState } from 'react';
import CartProvider from './ContextProvider';
import Mealsum from './components/MealsSum';

function App() {
  const [showCart,setShowCart]=useState(false)

  const showCartHandler=()=>{
    setShowCart(true)
  }
  const hideCartHandler=()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
    <Header onShowCart={showCartHandler}/>
    <main>
      <Mealsum/>
    </main>
    {showCart && <Cart onHideCart={hideCartHandler}/>}
    </CartProvider>
  );
}

export default App;