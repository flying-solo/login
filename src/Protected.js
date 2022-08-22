import {useNavigate} from 'react-router-dom';
function Protected({isLoggedin,children}){
    const navigate = useNavigate();
    if(!isLoggedin){
        return navigate("/");
    }

    return children;
}

export default Protected;