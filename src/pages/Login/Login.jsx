import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSignInMutation } from '../../context/api/UserApi/UserApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken,setUser } from '../../context/AuthSlice';
import './Login.scss'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signIn, { isError,isLoading,isSuccess,data }] = useSignInMutation();
    const navigate  = useNavigate()
     const dispatch =  useDispatch()

    if(isSuccess){
        dispatch(setToken(data.data.token))
        dispatch(setUser(data.data.user))
        toast.success("Saxifanggizga xushkelibsiz!")
        navigate("/admin")
      }
      if(isError){
        toast.error("Username yoiki Password xato kiritilgan.")
      }
      const handelSubmit = (e) => {
        e.preventDefault();
        signIn({
          UserName:username,
          password:password
        }) 
       }
    return (
      <div className='wrap'>
        <div className="login_row">
          <div className="login">
            <h1>Login</h1>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="">Name</label> <br />
                <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter your name' /> <br />
                <label htmlFor="">Password</label> <br />
                <input required value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter your password'/> <br />
                <button>
                  {
                    isLoading 
                    ? 
                    "Loading..." 
                    : 
                    "Login"
                  }
                </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;
