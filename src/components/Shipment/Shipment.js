import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
    
        const { register, handleSubmit, watch, errors } = useForm();
        const [loggedInUser, setLoggedInUser]= useContext(UserContext);
        const onSubmit = data => {
          console.log( 'form submitted', data);
          const savedCart = getDatabaseCart();
          const orderDetails = {...loggedInUser, product: savedCart, shipment: data, orderTime: new Date()};

          fetch('https://stark-thicket-25212.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
          })
          .then(res => res.json())
          .then(data => {
            if(data){
              processOrder();
              alert('your order placed successfully');
            }
          })

        };
      
        // console.log(watch("example")); // watch input value by passing the name of it
      
        return (
          
          <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
          
            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })}   placeholder="please enter your name"/>
            {errors.name && <span className='error'>Name is required</span>} 

            <input name="address" ref={register({ required: true })} placeholder="please enter your address" />
            {errors.address && <span className='error'>address is required</span>}

            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="please enter your email" />
            {errors.email && <span className='error'>email is required</span>}

            <input name="phone" ref={register({ required: true })} placeholder="please enter your phone" />
            {errors.phone && <span className='error'>phone is required</span>}

            
            <input type="submit" />
          </form>
        );
};

export default Shipment;