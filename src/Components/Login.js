import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) =>{
    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    }=props;

    return(
        <section className = "login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" 
                autoFocus
                 required 
                 value ={email}
                 onChange={(e) => setEmail(e.target.value)}
                 /> 
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input 
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="passwordError">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <nav>
                    {/* <Link to="/login/success"> */}

                    <button onClick={handleLogin}>Login</button>
                    {/* </Link> */}
                    <p>don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </nav>
                    </>
                ) : (
                    <>
                    <nav>
                    {/* <Link to="/login/success">     */}

                    <button onClick={handleSignup}>Sign up</button>
                    {/* </Link> */}

                    <p>have an account ?<span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
                    
                    </nav>
                    </>

                )

                }
            </div>

            </div>
        </section>
    )
}

export default Login;