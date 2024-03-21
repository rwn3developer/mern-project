import React from 'react'
import './topbar.css'
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='container-fluid'>
                <div className="row bg-dark p-2">
                    <div className="col-md-4">
                        <span style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>Social Media</span>
                    </div>
                    <div className="col-md-4 d-flex">
                        <input type='text' className='form-control w-50' /><button className='btn btn-success'>Submit</button>
                    </div>
                    <div className="col-md-4">
                        <nav className="navbar navbar-expand-sm bg-warning navbar-dark">
                            <div className="container-fluid">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar
