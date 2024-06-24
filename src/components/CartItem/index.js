import './index.css';

const CartItem = (props) => {


  return (
    <li className='cart-item'  >
      <div >
        <h2 className='cart-item-h2'  >{props.name}</h2>
        <div className='summary1' >
          <span className='price'>{props.price}</span>
          <span className='amount'>x{props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button className='cart-item-button' onClick={props.onRemove}>−</button>
        <button className='cart-item-button' onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;