import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const[inputValidity,setInputValidity]=useState({enteredName:true,enteredStreet:true,enteredCity:true,enteredPostalCode:true})
    const inputName=useRef()
    const inputStreet=useRef()
    const inputPostalCode=useRef()
    const inputCity=useRef()

    const{onHideCart,onConfirm}=props

    const isEmpty=value=>value.trim().length===0


  const confirmHandler = (event) => {
    event.preventDefault();
    const name=inputName.current.value;
    const street=inputStreet.current.value;
    const postalCode=inputPostalCode.current.value;
    const city=inputCity.current.value




    const nameisValid=!isEmpty(name)
    const streetisValid=!isEmpty(street)
    const cityisValid=!isEmpty(city)
    const postalCodeisValid=!isEmpty(postalCode)

    setInputValidity({enteredName:nameisValid,enteredStreet:streetisValid,enteredCity:cityisValid,enteredPostalCode:postalCodeisValid})
   
    
    const formIsValid=nameisValid && streetisValid && cityisValid && postalCodeisValid
 


    if (!formIsValid){
        return
    }
    onConfirm({name:name,street:street,city:city,postalCode:postalCode})
    
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${inputValidity.enteredName?'':classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputName} type='text' id='name' />
        {!inputValidity.enteredName && <p>Enter Valid Name</p>}
      </div>
      <div className={`${classes.control} ${inputValidity.enteredStreet?'':classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input ref={inputStreet} type='text' id='street' />
        {!inputValidity.enteredStreet && <p>Enter Valid Street Name</p>}
      </div>
      <div className={`${classes.control} ${inputValidity.enteredPostalCode? '':classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={inputPostalCode} type='text' id='postal' />
        {!inputValidity.enteredPostalCode && <p>Enter Valid Postal Code</p>}
      </div>
      <div className={`${classes.control} ${inputValidity.enteredCity?'':classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input ref={inputCity} type='text' id='city' />
        {!inputValidity.enteredCity && <p>Enter Valid City Name</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={onHideCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;