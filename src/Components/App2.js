import React,{useState,useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import './App1.css';
import { HomePage } from './HomePage';


const App2=() =>{

    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);
  
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  
  
  
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
  
    const handleLogout = () =>{
      fire.auth().signOut()
      localStorage.setItem('email','')
    };
  
    return(
      <div className="App1">
        {user ? (
          < Hero handleLogout = {handleLogout}/>
        ) : (
          <HomePage/>
        )}
        
       
      </div>
    )
    return (
      <div className="App1">
        <Login/>
      </div>
    );
  };
  
  
  export default App2;