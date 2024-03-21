import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
const Topbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">My Social Media</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <input type='text' placeholder='search post' className='form-control w-50'/> <button style={{marginLeft : "15px"}} className='btn btn-warning btn-sm'>submit</button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Topbar
