import produce from 'immer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchasesThunk } from '../store/slices/Purchases.slice';

const Purchases = () => {
  const purchases = useSelector(state => state.purchases)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPurchasesThunk())
  }, [])
  console.log(purchases);
  return (
    <div className='Purchases'>
      {purchases.map((data) => (
        data.cart.products.map((item) => (
          <div className='card-purchases'>
            <div>
              <h3 className='card-date'>{item.productsInCart.createdAt}</h3>
            </div>
            <div className='card-info'>
              <h1>{item.title}</h1>
              <div className='card-details'>
                <p>Quantity: {item.productsInCart.quantity}</p>
                <p>each unit: {item.price}</p>
                <p>total: {item.price * item.productsInCart.quantity}</p>
              </div>
            </div>
          </div>
        ))
      ))}
    </div>
  );
};

export default Purchases;