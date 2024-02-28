import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/authContext";

const GuestLayout = () => {
    const {user} = useAuthContext();

    return !user ? <Outlet /> : <Navigate to='dashboard' />
};

export default GuestLayout;