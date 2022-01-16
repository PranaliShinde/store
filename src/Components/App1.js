import React,{useState,useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import './App1.css';
import { Link } from 'react-router-dom';
import { AfterLogin } from './afterLogin';

const App1=() =>{

  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [propemail,setPropEmail]=useState('');
  //const [user1,setUser1]=useState('');


  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(false);

const clearInputs=()=>{
  setEmail('');
  setPassword('');
}

const clearErrors=()=>{
  setEmailError('');
  setPasswordError('');
}

const handleLogin=()=>{
      clearErrors();
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch ((err) =>{
        switch (err.code){
          case "auth/invalidid.email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

        }

      });
      console.log(email);
      setPropEmail(email);
      //const user1 = { email, password };
      
      // set the state of the user
      //setUser(response.data)
      // store the user in localStorage
      localStorage.setItem('email', email);

      //  let users=[]
      //  if(localStorage.getItem('users')){
      //   console.log("In users")
      //   users = JSON.parse(localStorage.getItem('users'));
      //  }
      //  users.push(email);
      //  localStorage.setItem('users', JSON.stringify(users));
      
      localStorage.setItem('currentUser',email);
      //console.log(response.data)
  };

  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch ((err) =>{
      switch (err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;

      }
    });
    console.log(email);
    setPropEmail(email);
    localStorage.setItem('email', email);

    let users=[]
    if(localStorage.getItem('users')){
      console.log("In users")
      users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(email);
    localStorage.setItem('users', JSON.stringify(users));
    
    localStorage.setItem('currentUser',email);
  };

 const handleLogout = () =>{
    fire.auth().signOut()
  };

  const authListener = () =>{
    fire.auth().onAuthStateChanged(user =>{
        if(user){

          clearInputs();
          setUser(user);
        }
        else{
          setUser("");
        }

    });
  };

  useEffect(() =>{
    authListener();
  }, []);

  return(
    <div className="App1">
      {user ? (
      //  < Hero handleLogout = {handleLogout}/>
       <AfterLogin emailid={propemail}/>
      ) : (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />

      )}
      
     
    </div>
  )
  return (
    <div className="App1">
      <Login/>
    </div>
  );
};



export default App1;