import { useAuthContext } from '../context/authContext';
import {Navigate} from 'react-router-dom';


const ProtectedRoute = ({redirectPath="/admin", children}) => {
    const auths = useAuthContext();
    console.log("user", auths.users);
    const user = auths.users;

    if(!user){
        return <Navigate to={redirectPath} replace/>
    }
    
    return(
        <>
            {children}
        </>
    )
}

export default ProtectedRoute