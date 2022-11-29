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
  return (
    <div className='Purchases'>
      <div>
        {purchases.map((data) => (
          data.cart.products.map((item) => (
            <div>
              <h1>{item.title}</h1>
            </div>
          ))
        ))}
      </div>

    </div>
  );
};

export default Purchases;