import React, {useState} from 'react';
import './Register.css';


const Register = () => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmpassword,setConfirmPassword] = useState("");

    return (
        <div className='register'>
            <form className='register__form'>
                <h1>Register</h1>
                <input type="username" 
                placeholder='Username'
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                 />

                <input type="email" 
                placeholder='Email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />

                <input type="confirmpassword" 
                placeholder='Confirm Password'
                value={confirmpassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                />

            </form>
            <button type="submit" className="submit__btn">Sign up</button>
        </div>
    )
}

export default Register