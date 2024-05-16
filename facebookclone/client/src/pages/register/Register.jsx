import React, { useState } from 'react'
import Topbar from '../../component/topbar/Topbar'

const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [city,setCity] = useState("");
    const [phone,setPhone] = useState("");
    const [profilepic,setProfile] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let formData = new FormData()
            formData.append("name",name)
            formData.append("email",email)
            formData.append("password",password)
            formData.append("city",city)
            formData.append("phone",phone)
            formData.append("profilepic",profilepic)
            
            let all = await fetch(`http://localhost:8000/auth/register`,{
                method : "POST",
                body : formData
            })
            let res = await all.json();
            if(res.success){
                alert(res.message)
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <Topbar />
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div class="card mt-5 w-50 d-flex">
                            <div class="card-header">
                                Register User
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" onChange={ (e) => setName(e.target.value) } value={name} placeholder='Enter Name'/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input type="text" className="form-control" onChange={ (e) => setEmail(e.target.value) } value={email}  placeholder='Enter Email'/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" onChange={ (e) => setPassword(e.target.value) } value={password}  placeholder='Enter Password'/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">City</label>
                                                <input type="text" className="form-control" onChange={ (e) => setCity(e.target.value) } value={city}  placeholder='Enter City'/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Phone</label>
                                                <input type="number" className="form-control" onChange={ (e) => setPhone(e.target.value) } value={phone}  placeholder='Enter Phone'/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Profile Pic</label>
                                                <input type="file" name='profilepic' onChange={ (e) => setProfile(e.target.files[0]) } className="form-control"/>
                                            </div>
                                        </div>

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

export default Register
