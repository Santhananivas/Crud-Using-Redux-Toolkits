import { toast } from "react-toastify"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER, GET_USER_LIST, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import axios from "axios"

const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

const addUser = () => {
    return {
        type: ADD_USER
    }
}

const updateUser = () => {
    return{
        type:UPDATE_USER
    }
}

const getUser = (data) => {
    return{
        type:GET_USER,
        payload:data
    }
}

export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(() => {
            axios.get('http://localhost:5000/posts').then(res => {
                const userList = res.data;
                dispatch(getUserList(userList));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        }, 2000)
    }
}

export const removeUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(() => {
            axios.delete('http://localhost:5000/posts/' + code).then(res => {
                dispatch(deleteUser());
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        }, 2000)
    }
}

export const addUserFunction = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.post('http://localhost:5000/posts',data).then(res => {
                dispatch(addUser());
                toast.success('user Add Successfully')
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // }, 2000)
    }
}

export const addUpdateUser = (data,code) =>{
    return(dispatch) => {
        dispatch(updateUser());
        axios.put('http://localhost:5000/posts/'+code,data).then(res =>{
            dispatch(updateUser());
            toast.success('User Update Successfully')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FetchUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        // setTimeout(() => {
            axios.get('http://localhost:5000/posts/'+code).then(res => {
                const userList = res.data;
                dispatch(getUser(userList));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
        // }, 2000)
    }
}