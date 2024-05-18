import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Topbar = () => {

    const [auth, setAuth] = useAuth()

    const handleLogout = () => {
        setAuth({
            ...auth,
            user : null,
            token : null
        })
        localStorage.removeItem('auth')
        alert("User successfully Logout")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container fix">
                <a className="navbar-brand" href="/">My Social Media</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <input type='text' placeholder='search post' className='form-control w-50' /> <button style={{ marginLeft: "15px" }} className='btn btn-warning btn-sm'>submit</button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">

                        {
                            auth?.token ? (
                                <li className="nav-item">
                                     <Link onClick={ () => handleLogout() } className="nav-link">Logout</Link>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/`}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/register`}>Register</Link>
                                    </li>
                                </>
                            )
                        }

                        <li className="nav-item">
                            <Link className="nav-link" to={`/home`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/profile">Message</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/settings">Notification</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Topbar
