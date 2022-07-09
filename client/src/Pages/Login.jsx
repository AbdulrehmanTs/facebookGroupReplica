import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    let height = window.innerHeight - 60

    const loggingIn =()=>{
     
    }
  return (
    <div>
         <div className='flex bg-blue-300 h-[60px] items-center justify-center'>
            <h1 className='text-[22px] text-white uppercase'>Facebook Group Replica</h1>
        </div>
        <div style={{minHeight:height+"px"}} className='bg-[#fafafa] flex justify-center items-center'>
            <div className='bg-white w-[450px] p-[32px] '>
                    <h1 className='text-center uppercase text-[20px]'>Login</h1>
                    <div className='flex flex-col mt-5 gap-y-4'>
                        <TextField value={email} onChange={(e)=> setEmail(e.target.value)} id="email" fullWidth  type='email' label="Email" variant="outlined" />
                        <TextField value={password} onChange={(e)=> setPassword(e.target.value)} id="password" type='password' fullWidth  label="Password" variant="outlined" />
                    </div>
                    <button onClick={loggingIn} className='bg-blue-300 mx-auto block hover:bg-blue-400 transition-all duration-300 text-white mt-4 w-[120px] h-[45px] rounded-[24px]'>Login</button>
                    <span className='block text-center mt-5 text-14 font-light'>
                        New Here? <Link to='/register' className='text-blue-300'>Sign up</Link> Now
                    </span>
            </div>
        </div>
    </div>
  )
}

export default Login