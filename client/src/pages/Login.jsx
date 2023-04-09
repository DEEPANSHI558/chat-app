import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assests/logo.svg';
import {Link} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
function Login() {
    const ToastOptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark",
    }
    const [values,setValues]=useState({
        username:"",
        password:"",
    })
    const handleSubmit=(event)=>{
      event.defaultPrevented();
      handleValidation();

    }
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.values})

    }
    const handleValidation=()=>{
        const {username, password}=values;
        if(username===""){

        }
    }
  return (
    <FormContainer>
        
        <form onSubmit={(event)=>{handleSubmit(event)}}>
            {/* username */}
            <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Depssy</h1>
        </div>
            <input type="text"
            placeholder="Username"
            name="username" 
            onChange={(e)=>{handleChange(e)}}/>
            {/* password */}
            <input type="password" name="password" placeholder="Password" onChange={(e)=>{handleChange(e)}}/>
            <button type="submit">LOGIN</button>
            <span>don't have an account? <Link to="/register">Register</Link></span>
            {/* incorporate login using google or email in this hehe please do this on your own this is a learning opportunity deepanshi chahe kitna time lage dont be disheartened and please try to do this on your own  */}
        </form>
    </FormContainer>
  )
}
const FormContainer=styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:#131324; 
gap;1rem;
.brand{
    display:flex;
    justify-content:center;
    align-items:center;
 

    img{
        height:5rem;
    }
    h1{
        color:white;
    }
}
form{
    display:flex;
    flex-direction:column;
    justify-content:center;
   
    padding:3rem 5rem;
    gap:2rem;
    background-color:#00000076;
    border-radius:2rem;
    input{
        background:transparent;
        padding:1rem;
        width:100%;
        border:0.1rem solid #4e0eff;
        border-radius:0.4rem;
        font-size:1rem;
        color:white;
        &:focus{
            border:0.1rem solid #997af0;
            outline:none;
        }     
        
    }
    button{
        background-color:#997af0;
        padding:1rem 2rem;
        color:white;
        text-transform:uppercase;
        width:100%;
        font-weight:bold;
        font-size:1rem;
        border:none;
        border-radius:04.rem;
        transition:0.5s ease-in-out;
        &:hover{
            background-color:#4e0eff;   
        }
    }
    span{
        color:white;
        text-transform:uppercase;
       
        a{
            text-decoration:none;
            font-size:1rem;
            font-weight:bold;
            color:blue;
            text-transform:uppercase;
        }
    }

}`;
export default Login
