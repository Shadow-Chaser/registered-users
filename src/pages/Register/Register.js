// import useToast from "@chakra-ui/toast";
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UsersContext } from '../../App';
import sea from '../../assets/sea.jpg';
import { emailRegex, mobileNoRegex, nameRegex, passRegex } from '../../components/RegEx';
import './Register.css';

const Register = () => {
    // const toast = useToast();
    const [users, setUsers] = useContext(UsersContext)
    const [regInfo, setRegInfo] = useState({})
    console.log("RegInfo: ", regInfo);
    const [inputError, setInputError] = useState({})
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/users" } };
    
    const handleInputValidation = e =>{
        const inputName = e.target.name;
        const inputValue = e.target.value;
        // console.log(inputValue);
        const info = { ...regInfo };

        if (inputName === 'name') {
            if (!nameRegex.test(inputValue)) {
                setInputError({ name: inputName, errorMessage: 'Please Type a only letters and space !' })
                info[inputName] = null;
                setRegInfo(info)
            } else {
                setInputError(null);
                info[inputName] = inputValue;
                setRegInfo(info)
            };
        };

        if (inputName === 'mobile') {
            if (!mobileNoRegex.test(inputValue)) {
                setInputError({ name: inputName, errorMessage: 'Please Type 10 digits no. !' })
                info[inputName] = null;
                setRegInfo(info)
            } else {
                setInputError(null);
                info[inputName] = inputValue;
                setRegInfo(info)
            };
        };

        if (inputName === 'email') {
            if (!emailRegex.test(inputValue)) {
                setInputError({ name: inputName, errorMessage: 'Please Type a Valid Email !' })
                info[inputName] = null;
                setRegInfo(info)
            } else {
                setInputError(null);
                info[inputName] = inputValue;
                setRegInfo(info)
            };
        };
        if (inputName === 'password') {
            if (!passRegex.test(inputValue)) {
                setInputError({ name: inputName, errorMessage: 'Minimum eight characters, at least one letter, one number and one special character!' })
                info[inputName] = null;
                setRegInfo(info)
            }
            else {
                setInputError(null)
                info[inputName] = inputValue;
                setRegInfo(info)
            }
        };
    } 

    const handleRegister = () =>{
        // console.log("clikc")
        if (regInfo.email && regInfo.name && regInfo.mobile && regInfo.password){
            const newUsers = [...users]
            newUsers.push(regInfo)
            setUsers(newUsers)
            localStorage.setItem('users', JSON.stringify(newUsers))
            
            alert('You have been registered successfully!')
            // toast({
            //     title: `You have been registered successfully! `,
            //     status: "success",
            //     position: "top",
            //     isClosable: true,
            // })

            history.push(from);

        }
        else{
            alert('Please fill out all the fields!')
            // toast({
            //     title: `Please fill out all the required fields! `,
            //     status: "error",
            //     position: "top",
            //     isClosable: true,
            // })
        }
    }

    return (
        <div className='row'>
            <div className="col-md-7">
                <img src={sea} alt="" srcset="" className='image'/>
            </div>

                <div className="col-md-5 register_div">
                <h1 className="welcome"> Register Yourself! </h1>                   
                    <h3 className="text">Please create your account.</h3>

                <div className="app-form">
                    <div className="app-form-group">
                        <input onChange={handleInputValidation} name='name' type="text" className="app-form-control" placeholder="Name"/>
                        {
                        inputError?.name === 'name' && <p className='text-danger text-center'>{inputError?.errorMessage}</p>
                        }
                    </div>
                    <div className="app-form-group">
                        <input onChange={handleInputValidation} name='mobile' type="number" className="app-form-control" placeholder="Mobile Number"/>
                        {
                        inputError?.name === 'mobile' && <p className='text-danger text-center'>{inputError?.errorMessage}</p>
                        }
                    </div>
                    <div className="app-form-group">
                        <input onChange={handleInputValidation} name='email' type="email" className="app-form-control" placeholder="Email"/>
                        {
                        inputError?.name === 'email' && <p className='text-danger text-center'>{inputError?.errorMessage}</p>
                    }
                    </div>
                    <div className="app-form-group">
                        <input onChange={handleInputValidation} name='password' type="password" className="app-form-control" placeholder="Password"/>
                        {
                        inputError?.name === 'password' && <p className='text-danger text-center'>{inputError?.errorMessage}</p>
                    }
                    </div>
                    <button onClick={handleRegister} className='btn' >Register</button>
                    <p className='mt-2'>Already have an account? <span> <Link to='/login'>Login</Link>  </span> </p>

                </div>
                


            </div>
        </div>
    );
};

export default Register;