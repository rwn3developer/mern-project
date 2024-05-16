import React, { useState } from 'react'
import Topbar from '../../component/topbar/Topbar'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()

    

    const handleSubmit = async(e) => {
        e.preventDefault()
        let all = await fetch(`http://localhost:8000/auth/loginUser`,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email,password
            })
        })
        let res = await all.json()
        if(res.success){
            setAuth({
                ...auth,
                user : res.user,
                token : res.token
            })
            let obj = {
                user : res.user,
                token : res.token
            }
            localStorage.setItem('auth',JSON.stringify(obj))
            alert(res.message)
            navigate('/home');
            setEmail("")
            setPassword("")
        }else{
            alert(res.message)
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
                                Login User
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} placeholder="Enter Email" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" placeholder='Enter Password' onChange={ (e) => setPassword(e.target.value) } value={password}  className="form-control"/>
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
