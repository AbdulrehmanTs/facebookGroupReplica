import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let height = window.innerHeight - 60

    const [userData, setUserData] = useState({})
    const values = {
        firstName,
        lastName,
        email,
        password
    }

    const register = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/register', values)
            setUserData(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className='flex bg-blue-300 h-[60px] items-center justify-center'>
                <h1 className='text-[22px] text-white uppercase'>Facebook Group Replica</h1>
            </div>
            <div style={{ minHeight: height + "px" }} className='bg-[#fafafa] flex justify-center items-center'>
                <div className='bg-white w-[450px] p-[32px] '>
                    <h1 className='text-center uppercase text-[20px]'>Sign Up</h1>
                    <div className='flex flex-col mt-5 gap-y-4'>
                        <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} id="first-name" fullWidth type='text' label="First Name" variant="outlined" />
                        <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} id="last-name" fullWidth type='text' label="Last Name" variant="outlined" />
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" fullWidth type='email' label="Email" variant="outlined" />
                        <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="password" type='password' fullWidth label="Password" variant="outlined" />
                    </div>
                    <button onClick={() => register()} className='bg-blue-300 mx-auto block hover:bg-blue-400 transition-all duration-300 text-white mt-4 w-[120px] h-[45px] rounded-[24px]'>Sign Up</button>
                    <span className='block text-center mt-5 text-14 font-light'>
                        Already Have an Account? <Link to='/login' className='text-blue-300'>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register