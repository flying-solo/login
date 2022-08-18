import {Navigate} from 'react-router-dom';
function Protected({isloggedin,children}){
    if(!isloggedin){
        return <Navigate to="/" replace />;
    }

    return children;
}

export default Protected;