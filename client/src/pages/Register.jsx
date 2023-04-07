import React ,{useState} from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Logo from "../assests/logo.svg"
import{ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { registerRoute } from '../utils/APIroutes';
import axios from "axios"
function Register(){
    const ToastOptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"    
        };
    const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""

    });
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(handleValidation()){
            const {username,password,email}=values;
            const {data}=await axios.post(registerRoute,{
                username,
                password,
                email
            });
        }
         
        
    };
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});

    };
    const handleValidation=()=>{
        const{username,email,password,confirmPassword}=values;
        if(password !==confirmPassword){
            toast.error("password should match the confirm password",ToastOptions
           );
           return false;
        }
        else if(username.length<3){
            toast.error("Username should be atleast of length 3",ToastOptions);
            return false;
        }
        else if(password.length<8){
            toast.error("Password should be atleast of length 8",ToastOptions);
            return false;
        }
        else if(email===""){
            toast.error("Email should be present",ToastOptions);
            return false;
        }
        return true;


    }
    return (
        <>
        <FormContainer>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <div className="brand">
                    <img src={Logo} alt="" />
                    <h1>Desppy</h1>
                </div>
               {/* we have to add four input fields one for username one for email,one for password and the last one for confirmed password and then do validation check on htem and form functions handle submit handlevalidation and handle change we have to make */}
            <input type ="text" placeholder="Username" name="username" onChange={(e)=>{handleChange(e)}} />
            <input type="email" placeholder="Email" name="email"  onChange={(e)=>{handleChange(e)}} ></input>
            <input type="password" placeholder="Password" name="password"  onChange={(e)=>{handleChange(e)}} ></input>
            <input type="password" placeholder="ConfirmPassword" name="confirmPassword"  onChange={(e)=>{handleChange(e)}} ></input>
            <button type="submit">CREATE USER</button>
            <span>Already have an account? <Link to="/login">LOGIN</Link></span>
            
            </form>
        </FormContainer>
        <ToastContainer></ToastContainer>
        </>

    );
}

const FormContainer=styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    background-color:#131324;   
    .brand{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
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
        gap:2rem;
        border-radius:2rem;
            padding:3rem 5rem;
            background-color:#00000076;
        input{
            background:transparent;
            padding:1rem;
            border:0.1rem solid #4e0eff;
            border-radius:0.4rem;
            color:white;
            width:100%;
            font-size:1rem;
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
            font-weight:bold;
            border-radius:0.4rem;
            border:none;
            font-size:1rem;
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
                color:blue;
                font-weight:bold;
            }
           
        }

    }`;

export default Register;
