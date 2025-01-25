import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ReactNode, useEffect, useState } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    console.log("Out use effect: " + JSON.stringify(currentUser));
    useEffect(() => {
        console.log("In use effect: " + JSON.stringify(currentUser));
        if (currentUser === undefined) {
            setLoading(true);
        } else {
            setLoading(false);
            if (!currentUser) {
                navigate("/login");
            }
        }
    }, [currentUser, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return currentUser ? <>{children}</> : null;
};

export default PrivateRoute;