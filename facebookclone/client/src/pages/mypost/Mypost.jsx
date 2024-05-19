import React from 'react'
import Leftsidebar from '../../component/leftsidebar/Leftsidebar'
import Topbar from '../../component/topbar/Topbar'

const Mypost = () => {
    return (
        <div className='container-fluid'>
            <Topbar />
            <div className="row my-3">
                <div className="col-md-3 my-3">
                    <Leftsidebar />
                </div>

                <div className='col-md-6 my-3'>
                    <div className='row'>
                        <div className='col-lg-6 mb-4'>
                            <div className="card">
                                <div className="card-header">
                                    My Post
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <div className='d-flex justify-content-between'>
                                        <p className='btn btn-success'>Likes :- 2</p>
                                        <p className='btn btn-primary'>Comments :- 3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="col-md-3 my-3">
                    <h4>Follow Unfollow</h4>
                </div>
            </div>
        </div>
    )
}

export default Mypost