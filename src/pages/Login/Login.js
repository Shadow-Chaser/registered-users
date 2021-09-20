import { Checkbox, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UsersContext } from '../../App';
import sea from '../../assets/sea.jpg';
import './Login.css';

const Login = () => {
    const toast = useToast();
    const [users, setUsers] = useContext(UsersContext)
    const [loginInfo, setLoginInfo] = useState({})

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/users" } };
    
    const handleInput = (e) => {
        const info = { ...loginInfo }
        info[e.target.name] = e.target.value;
        setLoginInfo(info)
    }

    const handleLogin = () =>{
        if(loginInfo.email && loginInfo.password){
            const foundEmail = users.find(u=> u.email===loginInfo.email)
            const foundPassword = users.find(u=> u.password===loginInfo.password)

            if(foundEmail && foundPassword){
                toast({
                    title: `You have been logged-in successfully! `,
                    status: "success",
                    position: "bottom",
                    isClosable: true,
                })
                history.push(from);
                

            }
            else if(foundEmail){
                toast({
                    title: `Wrong Password! `,
                    status: "error",
                    position: "top",
                    isClosable: true,
                })            
            }
            else{
                toast({
                    title: `Wrong Email! `,
                    status: "error",
                    position: "top",
                    isClosable: true,
                })
            }
        }
        else{
            toast({
                title: `Please fill out all the required fields! `,
                status: "error",
                position: "top",
                isClosable: true,
            })
        }
    }
    
    return (
        <div className='row ' >
            <div className="col-md-7">
                <img src={sea} alt="" srcset="" className='image'/>
            </div>

                <div className="col-md-5 login_div">
                    <h1 className="welcome"> Welcome back! </h1>
                    <h3 className="text">Please login to your account.</h3>

                <div class="app-form">
                    <div class="app-form-group">
                        <input onChange={handleInput} name='email' type="email" class="app-form-control" placeholder="Username or Email"/>
                    </div>
                    <div class="app-form-group">
                        <input onChange={handleInput} name='password' type="password" class="app-form-control" placeholder="Password"/>
                    </div>

                    <div className='d-flex justify-content-around'>
                    <Checkbox >Remember me</Checkbox>
                    <p>Forgot Password?</p>
                    </div>

                    <button onClick={handleLogin} className='btn'>Login</button>
                    <p className='mt-2'>Don't have an account? <span> <Link to='/register'>Register</Link>  </span></p>
                    <footer >
                         <span>Terms of use.</span>    
                         <span>Privacy policy</span>
                     </footer>
                </div>
            </div>
        </div>
    );
};

export default Login;