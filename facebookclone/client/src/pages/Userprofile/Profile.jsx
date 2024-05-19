import React, { useState } from 'react'
import Topbar from '../../component/topbar/Topbar'
import Leftsidebar from '../../component/leftsidebar/Leftsidebar'

const Profile = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [city,setCity] = useState("");
    const [phone,setPhone] = useState("");
    const [profilepic,setProfile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='container-fluid'>
            <Topbar />
            <div className="row my-3">
                <div className="col-md-3 my-3">
                    <Leftsidebar />
                </div>

                <div className='col-md-6 my-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <h4>Change Profile</h4>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} value={city} placeholder='Enter City' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Enter Phone' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profile Pic</label>
                                    <input type="file" name='profilepic' onChange={(e) => setProfile(e.target.files[0])} className="form-control" />
                                </div>
                            </div>

                        </div>




                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className="col-md-3 my-3">
                    <h4>Follow Unfollow</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile