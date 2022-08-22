import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginSchema } from "./validation/clientValidate";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";

function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const error = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const success = (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }

  const loginURL = process.env.REACT_APP_LOGINURL;


  const handleSubmit = async (e)=>{
    e.preventDefault();
    let loginData = {
      emailId: email,
      password: password,
    };

    const isLoginValid = await loginSchema.isValid(loginData);
    console.log(isLoginValid);

    if (isLoginValid) {
      console.log(isLoginValid);
      axios
        .post(loginURL, loginData)
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          success(res.data.message);
          setLoad(false);
          setTimeout(()=>{
            navigate("/");
          },4000);
        })
        .catch((err) => {
          // console.log(err.response.data.message);
          console.log(err);
          error(err.response.data.message);
          setLoad(false);
        });
    } else {
      error("Enter Valid Credentials");
      console.log("error");
      setLoad(false);
    }
  }

  return (
    <div className="">
      <Link to="/">Home</Link>
      <Box
        sx={{
          p: 2,
          border: "1px solid grey",
          display: "flex",
          flexDirection: "column",
          width: 1 / 4,
          mx: "auto",
          gap: 5,
          mt: 5,
        }}
      >
        <Box sx={{ fontSize: "h5.fontSize" }}>Login</Box>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Passowrd"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {load ? (<Button
          variant="contained"
          onClick={(e) => {
            handleSubmit(e);
            setLoad(true);
          }}
        >
          Loading....
        </Button>) : (<Button
          variant="contained"
          onClick={(e) => {
            handleSubmit(e);
            setLoad(true);
          }}
        >
          Login
        </Button>)}
        <ToastContainer />
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </Box>
    </div>
  );
}

export default Login;
