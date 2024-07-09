import React, { useState } from 'react'
import InputBox from './Input'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUserFunction } from './Redux/Action';

function AddUser() {

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [user, setuser] = useState({ name: "", email: "", roll: "" })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserFunction(user))
    console.log(user)
    navigator('/Users')
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <InputBox
          id="name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleOnChange}
          placeholder="UserName"
        />
        <InputBox
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
        <InputBox
          id="roll"
          type="text"
          name="roll"
          value={user.roll}
          onChange={handleOnChange}
          placeholder="Enter User Roll"
        />
        <button type='submit' className='btn btn-primary'>Add Users</button>
        <Link to={'/Users'} className='btn btn-danger'> Back </Link>
      </form>
    </div>
  )
}

export default AddUser