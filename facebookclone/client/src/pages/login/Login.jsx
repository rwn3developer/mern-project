import React from 'react'
import Topbar from '../../component/topbar/Topbar'

const Login = () => {
    return (
        <>
            <Topbar />
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div class="card mt-5 w-50 d-flex">
                            <div class="card-header">
                                Login User
                            </div>
                            <div class="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
