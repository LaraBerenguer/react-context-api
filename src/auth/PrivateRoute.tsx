import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ReactNode, useEffect } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {navigate("/login");}
    }, [currentUser, navigate]);

    return ( currentUser ? <>{children}</> : null);
};

export default PrivateRoute;