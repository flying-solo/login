import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { clientSchema } from "./validation/clientValidate";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import endpoints from "./constants/Constants";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const error = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 2000,
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

  const signupURL = process.env.REACT_APP_URL+endpoints.signup;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let signupData = {
      name: name,
      emailId: email,
      password: password,
    };

    const isSignupValid = await clientSchema.isValid(signupData);

    console.log(isSignupValid);

    if (isSignupValid) {
      console.log(isSignupValid);
      axios
        .post(signupURL, signupData)
        .then((res) => {
          console.log(res.data);
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
  };

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
        <Box sx={{ fontSize: "h5.fontSize" }}>Signup</Box>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        
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
          Signup
        </Button>)}
        
        <ToastContainer />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Box>
    </div>
  );
}

export default Signup;
