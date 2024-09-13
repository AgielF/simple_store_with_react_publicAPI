import React, { useRef, useEffect,useState } from 'react';
import InputForm from "../elements/input/Index";
import Button from "../elements/button";
import { login } from '../../services/auth.service';

const FormLogin = () => {
    const [loginFailed,setLoginFailed]=useState("")
    const usernameRef = useRef(null);

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }, []);

    const HandleLogin = (event) => {
        event.preventDefault();
        
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        login(data,(status,res)=>{
            if(status){
                localStorage.setItem('token',res)
                window.location.href="/products"
            }
            else{
                setLoginFailed(res.response.data)
                console.log(res.response.data)
            }


        });
    };

    return (
        <form onSubmit={HandleLogin}>
           {loginFailed &&  <p className="text-red-500">{loginFailed}</p>}
            <InputForm 
                label="Username" 
                placeholder="john" 
                type="text" 
                name="username" 
                ref={usernameRef}
            />
            <InputForm 
                label="Password" 
                placeholder="********" 
                type="password" 
                name="password" 
            />
            <Button className="bg-blue-600 w-full" type="submit">
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
