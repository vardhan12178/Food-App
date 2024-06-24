import MealsImage from '../../assets/meals.jpg'
import CartButton from '../CartButton'
import './index.css'
const Header=(props)=>{
    const{onShowCart}=props
    return(
    <>
    <header className='header'>
        <h1>Food Hub</h1>
        <CartButton onClick={onShowCart}/>
    </header>
    <div className='main-image'>
        <img src={MealsImage} alt="food-pic"/>
    </div>
    </>
    )
    }
export default Header