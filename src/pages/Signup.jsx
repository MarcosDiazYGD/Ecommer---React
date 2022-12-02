import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import getConfig from '../utils/getConfig';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data);
      axios
        .post(`https://e-commerce-api.academlo.tech/api/v1/users`, data, getConfig())
        .then(navigate('/login'))
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(submit)} className='login-form'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" {...register('firstName')} className='login-input' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" {...register('lastName')} className='login-input' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" {...register('email')} className='login-input' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password min.length 8</Form.Label>
          <Form.Control minLength='8' type="password" {...register('password')} className='login-input' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone min.length 10</Form.Label>
          <Form.Control minLength='10' type="number" {...register('phone')} className='login-input' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" {...register('role')} className='login-input' />
        </Form.Group>

        <Button variant="primary" type="submit" className='login-button'>
          Submit
        </Button>
        <Link className='link-login' to={'/login'}>Login</Link>

      </Form>

    </div>
  );
};

export default Signup;