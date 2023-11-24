import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Logout(){
    const { logoutSubmitHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        logoutSubmitHandler();
        navigate('/');
    },[])
    return null;
}