import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductsThunk, checkoutThuk } from '../store/slices/cart.slice';

const CartSidebar = ({ handleClose, handleShow, show }) => {
  const cartProducts = useSelector(state => state.cart)
  const dispatch = useDispatch()
  let [total, setTotal] = useState(0)
  let price = 0

  useEffect(() => {
    dispatch(cartProductsThunk())
  }, [])

  useEffect(() => {
    cartProducts.forEach((product) => {
      price += product.price * product.productsInCart.quantity
      console.log(price);
    })
    setTotal(price)
  }, [cartProducts])

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='cart-container'>
          {cartProducts.map(product => (
            <div className='card-cartProducts' key={product.id}>
              <h3>{product.title}</h3>
              <div className='cart-detailsProduct'>
                <p>quantity: {product.productsInCart.quantity}</p>
                <span>price: {product.price * product.productsInCart.quantity}</span>
              </div>
            </div>
          ))}
          <p className='total-priceProducts'>total: {total}</p>
        </Offcanvas.Body>
        <div className='cart-checkout'>
          <button onClick={() => dispatch(checkoutThuk())}>
            <h1>Checkout</h1>
          </button>
        </div>
      </Offcanvas>
    </>
  ); A
};

export default CartSidebar;