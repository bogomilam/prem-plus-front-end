import React, { useState } from "react"


const SignupForm = ({ signup }) => {
    const [signupData, setSignupData ] = useState({})

    const handleSignupChange = e => {
        // console.log(e.target.name, e.target.value)
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    }

    const handleSignUpSubmit = e => {
        e.preventDefault()
        signup(signupData)
        // console.log(signupData)
    }
    
    return (
        <div>
                <form onSubmit={handleSignUpSubmit}>
                <div class="form-group">
                    <h1>Register Here </h1>
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleSignupChange} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your Password" onChange={handleSignupChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

    export default SignupForm