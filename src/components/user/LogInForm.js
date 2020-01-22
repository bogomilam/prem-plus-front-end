import React, { useState } from "react"
import SignupForm from './SignupForm'

const LoginForm = ({ login, signup }) => {
    const [loginData, setLoginData ] = useState({})

    const handleLoginChange = e => {
        // console.log(e.target.name, e.target.value)
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    const handleLoginSubmit = e => {
        console.log("YOO", loginData)
        e.preventDefault()
        login(loginData)
    }
    
    return (
        <div>
           <form onSubmit={handleLoginSubmit}>
                <div class="form-group">
                    <h1>Log In</h1>
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleLoginChange} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your Password" onChange={handleLoginChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                < SignupForm signup={signup} /> 
            </div>
        )
    }

    export default LoginForm