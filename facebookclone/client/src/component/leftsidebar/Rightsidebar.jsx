import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom';


const Rightsidebar = () => {
    const [auth, setAuth] = useAuth();
    const [users, setUsers] = useState([])
    const getAllUsers = async () => {
        try {
            const all = await fetch(`http://localhost:8000/auth/showAllUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            let res = await all.json()
            if (res.success) {
                setUsers(res.users)
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <h5 className='mb-3'>Users</h5>

                        {
                            users.map((user) => {
                                return (
                                    <div key={user._id} className="card mb-3">
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <img src={user.profileimage} style={{ width: "40px", borderRadius: "50%" }} />
                                            {/* <h6 style={{cursor:"pointer"}} className='mx-4'>{user.name}</h6> */}
                                                <Link style={{textDecoration:"none",color:"black"}} to={`/userdetails/${user._id}`}>
                                                    <h6>{user.name}</h6>
                                                </Link>
                                            
                                            <button className='btn btn-success btn-sm'>Follow</button>
                                            <button className='btn btn-warning btn-sm'>Unfollow</button>
                                        </div>
                                    </div>
                                )
                            })
                        }




                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightsidebar
