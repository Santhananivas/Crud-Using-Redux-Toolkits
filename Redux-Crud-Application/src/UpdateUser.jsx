import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import InputBox from './Input';
import { FetchUser, addUpdateUser } from './Redux/Action';


function UpdateUser() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { code } = useParams();
  const userList = useSelector((state) => state.user.userobj)

  const [user, setuser] = useState({ id: 0, name: "", email: "", roll: "" })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addUpdateUser(user))
    navigator('/Users')
  }

  useEffect(() => {
    dispatch(FetchUser(code))
    console.log(code)
  }, [])

  useEffect(() => {
    if (userList) {
      setuser({ id: userList.id, name: userList.name, email: userList.email, roll:userList.roll })
    }
    console.log(user)
  }, [userList])

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <InputBox
          id="userid"
          name="id"
          type="number"
          value={user.id}
          disabled='disabled'
          placeholder="UserName"
        />
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
        <button type='submit' className='btn btn-primary'>Update User</button>
        <Link to={'/Users'} className='btn btn-danger'> Back </Link>
      </form>
    </div>
  )
}

export default UpdateUser