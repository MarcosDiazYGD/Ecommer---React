import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategoryThunk, setProductsThunk } from '../store/slices/Products.slice';

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const [ProductCategory, setProductCategory] = useState([])

  // ordenar segun el precio

  useEffect(() => {
    dispatch(setProductsThunk())

    axios
      .get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
      .then(res => setProductCategory(res.data.data.categories))
  }, [])

  return (
    <div className="Home">
      <Row>
        <Col lg={3}>
          <div className="Home--utility">
            <div className='Home--filters'>
              <h2>filters</h2>
              <p>mayor price</p>
              <p>lower price</p>

            </div>

            <div className='Home--categories'>
              <h2>categories</h2>
              {ProductCategory.map(p => (
                <p onClick={() => {
                  dispatch(setCategoryThunk(p.id))
                }}>
                  {p.name}
                </p>
              ))}
            </div>
          </div>
        </Col>


        <Col lg={9}>

          <div className='Home--Products'>
            {products.map(product => (
              <Link className='product' key={product.id} to={`products/${product.id}`}>
                <img className='product--image' src={product.productImgs[0]} alt="Product--image" />

                <div className='product--detail'>
                  <h5 className='product--title'>{product.title}</h5>
                  <div className='product--footer'>
                    <div>
                      <p>{product.category.name}</p>
                      <span className='product--price'>{product.price}</span>
                    </div>
                    <div>
                      <p>{product.status}</p>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </Col>
      </Row>



    </div>

  );
};

export default Home;