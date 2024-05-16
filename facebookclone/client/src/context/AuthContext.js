import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({
        user : null,
        toekn : null
    })

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('auth'))
        if(data){
            setAuth({
                ...auth,
                user : data.user,
                token : data.token
            })
        }
    },[])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export {useAuth,AuthProvider}

