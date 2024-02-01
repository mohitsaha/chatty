import React, { useState } from 'react';
const SignUp = () => {
    const [email, setEmail] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)
    const handleName = (event) => setName(event.target.value)
    const handleShow = (event) => setShow((show) => !show)
    
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Username:', name);
        console.log('Username:', email);
        console.log('Password:', password);
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
                                <label >Sign up</label>
                                <input type='text' placeholder='Name' onClick={handleName}/>
                                <input type='email' placeholder='Email' onClick={handleEmail}/>
                                <input type='password' placeholder='Password' onClick={handlePassword}/>
                                <button>Submit</button>
                            </form>
                        </div>
            </div>
        </div>
    )
}

export default SignUp;