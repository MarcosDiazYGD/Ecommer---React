import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Slide from '../components/Slide';
import { addProductThunk } from '../store/slices/cart.slice';
import { setProductsThunk } from '../store/slices/Products.slice';

const ProductDetail = () => {
  const { id } = useParams()
  const products = useSelector(state => state.products)
  const product = products.find(item => item.id === Number(id))
  const dispatch = useDispatch()
  const [amountProduct, setAmountProduct] = useState(1)
  const similarProducts = products.filter(p => p.category.id === product.category.id)
  const upp = () => window.scrollTo(0, 0)

  useEffect(() => {
    dispatch(setProductsThunk())
  }, [])

  const addToCart =  () => {
    const addingProduct = {
      id: Number(id),
      quantity: amountProduct
    }
    dispatch(addProductThunk(addingProduct))
  }
  return (
    <Container className='my-1'>
      <div className='ProductDetail'>
        <div className='ProductDetail-container'>

          <div className='ProductDetail-slide'>
            <Slide img1={product?.productImgs?.[0]} img2={product?.productImgs?.[1]} img3={product?.productImgs?.[2]} className='Slide' />
          </div>
          <div className='ProductDetail-info'>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>

            <div className='productDetail-buttons'>
              <button onClick={addToCart}>Add to cart</button>
              <div className='priceAndAmount'>
              <input type="number"
                value={Number(amountProduct)}
                onChange={e => setAmountProduct(e.target.value)}
                min='1'
                className='amountProduct' />
              <span>{product?.price}</span>
              </div>
            </div>
          </div>
        </div>
        <div >
          <h3 className='similar-products-title'>Similar Products</h3>
          <div className='container-similar-products'>{similarProducts.map(p => (
            <Link onClick={upp} to={`/products/${p.id}`} key={p.id} className='card-similar-product'>
              <img src={p.productImgs[0]} className='similar-product-image' />
              <h5>{p.title}</h5>
            </Link>
          ))}</div>
        </div>

      </div>
    </Container>
  );
};

export default ProductDetail;