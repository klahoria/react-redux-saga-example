// src/App.js
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { increment, decrement, login } from './store/Actions/Actions';
import { GET_SETTINGS } from './store/Actions/settings'
import { Button, Form } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';

function App() {

  // const { Login } = useSelector(data => data)
  const dispatch = useDispatch();
  const [creds, SetCeds] = useState({});

  useEffect(() => {
    // Dispatch the action to trigger the Redux Saga
    GET_SETTINGS();
  }, []);

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
    <div className='container-fluid px-0 vh-100'>
      <div className='d-flex h-100'>
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
