import { useState } from 'react';
import {ChatState} from '../../context/chatProvider'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = React.useState('')
    const [show, setShow] = React.useState(false)
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)
    const handleShow = (event) => setShow((show) => !show)
    const [password, setPassword] = useState('');
    const {setUser} = ChatState;
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('Username:', email);
        console.log('Password:', password);
        //make a toast todo
        if(!email || !password){
            //make a toast
            return;
        }
        try{
            const config = {
                headers:{
                    "Content-type":"application/json",
                },
            };

            const {data} = await axios.post(
                "/api/user/login",
                {email,password},
                config
            );
            
        }catch{

        }
      };
    return (
        <div className='Login'>

            <div className='login_content'>
                <h1 className='login_content_h1'>
                    Message <br></br> privately
                </h1>
                <p className='login_content_p'>
                    Simple, reliable, private messaging and calling for free*, available all over the world.
                </p>
            </div>
            <div className='login_form'>
                        <div>
                            <form  className='form_login' onSubmit={handleLogin}>
                                <label htmlFor='email' on>Login</label>
                                <input type='email' placeholder='Email' onChange={handleEmail}/>
                                <input type='password' placeholder='Password' onChange={handlePassword}/>
                                <button>Submit</button>
                            </form>
                        </div>
            </div>
        </div>
    )
}

export default Login