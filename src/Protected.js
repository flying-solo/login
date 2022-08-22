import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import endpoints from './constants/Constants';

function Protected({children}){
    const [verification, setVerification]=useState(false);
    const navigate = useNavigate();
    const url = process.env.REACT_APP_URL+endpoints.validate;
    const config ={
        headers: {
            "authorization": `Bearer ${localStorage.getItem('token')}` 
        }
    };

    axios.post(url,{},config).then((res=>setVerification(res.data.success))).catch(err=>{console.log(err)});

    if(verification){
        return children;
    }else{
        navigate("/");
    }
}

export default Protected;