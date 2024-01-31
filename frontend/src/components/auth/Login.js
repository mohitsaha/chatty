import chattyLogo from "../../images/logo-no-background.png"
import { Input } from '@chakra-ui/react'
import {InputGroup} from '@chakra-ui/react'
import {InputRightElement} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'

import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [show, setShow] = React.useState(false)
    const handleChange = (event) => setEmail(event.target.value)
    const handleShow = (event) => setShow((show)=>!show)
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
                
            </div>
        </div>
    )
}

export default Login