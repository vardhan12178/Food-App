import { useContext } from 'react';
import CartContext from '../../CartContext';
import MealForm from '../MealForm';
import './index.css';

const MealItem = (props) => {
  const { data } = props;
  const { id, name, description, price, image } = data;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
      image: image, // Optionally, include image in the cart item
    });
  };

  return (
    <div className='meal'>
      <img src={image} alt={name} className='meal-image' />
      <div className='meal-details'>
        <div>
          <h3 className='mealheading'>{name}</h3>
          <p className='description'>{description}</p>
          <p className='price'>₹{price}</p>
        </div>
        <div>
          <MealForm id={id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
}

export default MealItem;
