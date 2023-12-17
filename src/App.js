// src/App.js
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { increment, decrement, login } from './store/Actions/Actions';
import { GET_SETTINGS } from './store/Actions/settings'
import { Button, Form } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import MultiOptoinPage from './components/MultiOptionPage/MultiOptoinPage';
import BaseRoute from './components/BaseRoute/BaseRoute';
import Finance from './components/Finance/Finance';

function App() {

  // const { Login } = useSelector(data => data)
  const dispatch = useDispatch();
  const [creds, SetCeds] = useState({});

  // function getValues(values) {
  //   let data = new FormData(values);
  //   return data;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(creds))
  }

  const handleChange = (e) => {
    e.preventDefault();
    SetCeds(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className='container-fluid px-0 min-vh-100'>
      {/* <div className='d-flex h-100'>
        <div className=" px-0">
          <Navbar />
        </div>
        <div className="flex-grow-1 px-3 py-3">
          <Form name="loginForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleChange} name='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div> */}

      <div className='d-flex min-vh-100'>
        <div className=" px-0 d-sm-block d-none
        ">
          <Navbar />
        </div>
        <div className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Navigate to="/app/finance-customer" replace={true} />} />
            <Route path={'/app/finance-customer'} exact={true} element={<MultiOptoinPage />} />
            <Route path={'/app/finance'} exact element={<Finance />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    count: state.counterReducer.count,
  });

const mapDispatchToProps = {
  increment,
  decrement,
  GET_SETTINGS
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
