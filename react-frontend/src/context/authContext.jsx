import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const [errors, setErrors] = useState('');
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    const getUser = async () => {
        try{
            const {data} = await axios.get("api/user");
            setUser(data);
        } catch(e) {
            setUser(null);
        }
    }

    useEffect(() => {
        if(!user) {
         getUser();
        }
     }, []);

    const login = async ({...data}) => {
        await csrf();
        try {
            await axios.post('/login', data);
            await getUser();
            navigate('/dashboard');
        } catch (e) {
            setErrors('Invalid credentials. Please try again.')
        }
    }

    const register = async (data) => {
        await csrf();
        try {
            await axios.post('/register', data);
            await getUser();
            navigate('/dashboard');
        } catch (e) {
            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const logout = () => {
        axios.post('/logout').then(() => {
            setUser(null);
            navigate('/');
        })
    }

    return <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext)
}