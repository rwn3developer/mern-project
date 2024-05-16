import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const UserPrivateRoute = () => {

    const [auth,setAuth] = useAuth()

  return (
        // auth?.token && auth?.user?.role==="user" ? <Outlet/> : <Navigate to={'/'}/>
        auth?.token  ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default UserPrivateRoute
