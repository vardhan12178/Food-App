import { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import MealItem from '../MealItem';
import './index.css';

const AvailableMeals = () => {
  const [foodList] = useState([
    {
      id: 1,
      name: "Chicken Fry Biryani",
      description: "A flavorful biryani with crispy fried chicken.",
      price: 180,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/n0npykj9rztkzx3lumqb"
    },
    {
      id: 2,
      name: "Chicken Dum Biryani",
      description: "Aromatic and flavorful biryani made with chicken and spices.",
      price: 160,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f169fa459d96b85cff76e91328bffb7f"
    },
    {
      id: 3,
      name: "Mutton Biryani",
      description: "A rich and savory biryani made with tender mutton.",
      price: 200,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/dryxxkkc6snios2kegxz"
    },
    {
      id: 4,
      name: "South Indian Veg Thali",
      description: "A traditional South Indian vegetarian meal.",
      price: 250,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/rimvisbyrwmwrpp0f1eb"
    },
    {
      id: 5,
      name: "Curd Rice",
      description: "A simple and refreshing dish made with curd and rice.",
      price: 80,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/2774a73dfbcdbbdfa855e64302503d87"
    },
    {
      id: 6,
      name: "Fried Rice",
      description: "A classic dish of rice stir-fried with vegetables and sauces.",
      price: 100,
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/lrvqrtegzk5yrz59syum"
    }
  ]);
  const [isLoading] = useState(false);
  const [httpError] = useState(false);

  return (
    <div className='meals'>
      <div className='card'>
        {!isLoading && !httpError && foodList.map(each =>
          <MealItem data={each} key={each.id} />
        )}
        {isLoading && <div className='loader'><BeatLoader color="#000000" /></div>}
        {httpError && <p className='error'>Something went wrong!</p>}
      </div>
    </div>
  );
}

export default AvailableMeals;
