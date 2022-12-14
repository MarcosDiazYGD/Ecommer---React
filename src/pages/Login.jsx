import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setProductsThunk } from '../store/slices/Products.slice';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState('')
  const [serPassword, setUserPassword] = useState('')
  const isVisible = false
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProductsThunk())
  }, [])

  const submit = data => {
    axios.post(`https://e-commerce-api.academlo.tech/api/v1/users/login`, data)
    .then(res => {
      localStorage.setItem('token', res.data.data.token )
      navigate('/')
    })
    .catch(error => {
      if(error.response?.status === 404){
        alert('correo o contraseña incorrectos')
      }
    }
      )
  }
  return (
    <div className='Login'>
      <Form onSubmit={handleSubmit(submit)} className='login-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...register('email')} className='login-input'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password')} className='login-input'/>
        </Form.Group>
        <Button variant="primary" type="submit" className='login-button'>
          Submit
        </Button>

        <Link className='link-signup' to={'/signup'}>create acount</Link>

      </Form>
    </div>
  );
};

export default Login;