import React, { useContext } from 'react';
import { UsersContext } from '../../App';
import sea from '../../assets/sea.jpg';


const UserList = () =>{
    const [users, setUsers] = useContext(UsersContext)

    return(
        <div className='row'>
            <div className='col-md-7'>
            <img src={sea} alt="" srcset="" className='image'/>
            </div>

            <div className='col-md-5'>
                <h1 className='welcome'>User List</h1>
                <ul>
                    {
                        users?.map(u=> <li>
                            <h5 style={{fontSize:'14px'}}> Email: {u.email} </h5>
                            <h5 style={{fontSize:'14px'}}> Name: {u.name} </h5>
                            <h5 style={{fontSize:'14px'}}> Mobile: {u.mobile} </h5>
                            
                        </li>)
                    }
                </ul>

            </div>
        </div>
    )

}

export default UserList;