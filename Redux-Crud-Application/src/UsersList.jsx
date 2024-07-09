import React, { useEffect } from 'react'
import { FetchUserList,removeUser } from './Redux/Action'
import { Link } from 'react-router-dom'
import {connect} from "react-redux"
import { toast } from 'react-toastify'

function UsersList(props) {

  useEffect(()=>{
    props.loaduser();
  },[])

  const handleDelete = (code)=>{
    if (window.confirm('Do You Want Remove?')){
      props.removeuser(code);
      props.loaduser();
      toast.success('User Remove Succesfully.');
    }
  }
  return (
    props.user.loading?<div><h2>Loading......</h2></div>:
    props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
    <div>
      <div className='card'>
        <div className='card-header'>
          <Link to={'/adduser'} className='btn btn-primary'>Add User [+]</Link>
        </div>
        <div className='card-body'>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Roll</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
             {
              props.user.userlist && props.user.userlist.map(item=>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.roll}</td>
                  <td>
                    <Link to={'/Users/edit/'+item.id} className="btn btn-primary">Edit</Link>
                    <button onClick={()=>{handleDelete(item.id)}} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              )
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    user:state.user
  }
}

const mapDispatchProps = (dispatch) =>{
  return{
    loaduser:()=>dispatch(FetchUserList()),
    removeuser:(code)=>dispatch(removeUser(code))
  }
}

export default connect(mapStateToProps,mapDispatchProps) (UsersList);