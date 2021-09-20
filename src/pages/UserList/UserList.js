import React, { useContext } from 'react';
import { UsersContext } from '../../App';
import sea from '../../assets/sea.jpg';
import './UserList.css';
let i=1;

const UserList = () =>{
    const [users, setUsers] = useContext(UsersContext)

    return(
        <div className='row'>
            <div className='col-md-7'>
            <img src={sea} alt="" srcset="" className='image'/>
            </div>

            <div className='col-md-5'>
                <h1 className='user_table_caption'>User List</h1>
                <table class="table table-bordered user_table">
                <thead>
                    <tr class='table-light'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(u =>
                            <tr>
                                <td>{i++}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.mobile}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>


            </div>
        </div>
    )

}

export default UserList;