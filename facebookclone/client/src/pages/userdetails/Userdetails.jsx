import React from 'react'
import Topbar from '../../component/topbar/Topbar'
import Leftsidebar from '../../component/leftsidebar/Leftsidebar'
import './userdetails.css'

const Userdetails = () => {
    return (
        <>
            <div className='container-fluid'>
                <Topbar />
                <div className="row my-3">
                    <div className="col-md-3 my-3">
                        <Leftsidebar />
                    </div>

                    <div className='col-lg-8'>
                        <div className="card">
                            <div className="card-header">
                                <h6 className='p-0'>User Details</h6>
                            </div>
                            <div className="card-body d-flex">
                                <div className='user-image'>

                                </div>
                                <div className='user-details mx-5 mt-3'>
                                    <div className='row'>
                                    <h5>abc</h5>
                                        <div className="col-lg-12 d-flex justify-content-between">
                                            <button>Following</button>
                                            <button>Followeres</button>
                                            <button>Like</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Userdetails
