import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Leftsidebar = () => {

    const [auth, setAuth] = useAuth();

    return (
        <>
            <div className="bg-light border-right p-3" id="sidebar-wrapper">
                <div className="sidebar-heading">My Social Media</div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    <Link to={`/createpost`} className="list-group-item list-group-item-action bg-light">Create Post</Link>
                    <Link to={`/mypost`} className="list-group-item list-group-item-action bg-light">My Post</Link>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Settings</a>
                </div>
            </div>

            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row">
                    <div className="card text-center">
                        <div className="card-header">
                            User Profile
                        </div>
                        <div className="card-body">
                            <div className='mb-3'>
                                <img src={auth?.user?.profileimage} className="img-thumbnail" alt="..." />
                            </div>
                            <h5 className="card-text">{auth?.user?.name}</h5>
                            <p className="card-text">{auth?.user?.email}</p>
                            <p className="card-text">{auth?.user?.city}</p>
                            <p className="card-text">{auth?.user?.phone}</p>
                            <Link to={`/userprofile`}>
                                <button className="btn btn-success">
                                    Change Profile
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Leftsidebar
