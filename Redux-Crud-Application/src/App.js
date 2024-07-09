import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import UsersList from './UsersList';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import {ToastContainer} from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      <div className='header'>
        <Link to={'/'}>Home</Link>
        <Link to={'/Users'}>Users</Link>
      </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Users' element={<UsersList></UsersList>}></Route>
          <Route path='/adduser' element={<AddUser></AddUser>}></Route>
          <Route path='/Users/edit/:code' element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
