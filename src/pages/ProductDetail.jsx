import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Slide from '../components/Slide';
import { setProductsThunk } from '../store/slices/Products.slice';

const ProductDetail = () => {


  const { id } = useParams()
  const products = useSelector(state => state.products)
  const product = products.find(item => item.id === Number(id))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProductsThunk())
  }, [])

  const similarProducts = products.filter(p => p.category.id === product.category.id)

  console.log(product);
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
              <button>Add to cart</button>
              <span>{product?.price}</span>
            </div>
          </div>
        </div>
        <div >
          <h3 className='similar-products-title'>Similar Products</h3>
          <div className='container-similar-products'>{similarProducts.map(p => (
            <Link to={`/products/${p.id}`} key={p.id} className='card-similar-product'>
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