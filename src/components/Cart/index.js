import {  useContext, useState } from 'react'
import CartContext from '../../CartContext'
import CartItem from '../CartItem'
import CheckOut from '../CheckOut'
import Modal from '../Modal'
import './index.css'

const Cart=(props)=>{
  const[isCheckOut,setCheckOut]=useState(false)
    const{onHideCart}=props
    const ctx=useContext(CartContext)
   
    const totalAmount = ctx.totalAmount;

    const hasItems = ctx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });
      };

const onsubmitOrder=async(data)=>{
const response=await fetch("https://foodcart-feb07-default-rtdb.firebaseio.com/meals.json",{
    method:"POST",
    body:JSON.stringify({userData:data,orderedItems:ctx.items})
});
console.log(response)

}


    const cartItems = (
        <ul className='cart-items'>
          {ctx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
             
            />
          ))}
        </ul>
      );

  const handleOrder=()=>{
    setCheckOut(true)
  
  }
    return(
        <Modal onClick={onHideCart}>
                {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
            </div>

            {isCheckOut && <CheckOut onConfirm={onsubmitOrder} onHideCart={onHideCart}/>}
           
           {!isCheckOut && <div className='actions' >
            {hasItems && <button  onClick={handleOrder} type="button"  >Order</button>}
            <button type="button"  onClick={onHideCart}>Close</button>
            </div>}

        </Modal>
    )
}

export default Cart