import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { clientSchema } from "./validation/clientValidate";
import axios from "axios";

function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const signupURL = process.env.SIGNUPURL;

  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let signupData = {
      // name: name,
      // username: username,
      "email": email,
      "password": password
    }
    const isSignupValid = await clientSchema.isValid(signupData);
    console.log(isSignupValid);

    if(isSignupValid){
      axios.post(signupURL, signupData).then((res)=>{setResponse(res.data);}).catch((err)=>{setError(err);});
    }else{
      console.log(isSignupValid);
    }
    console.log(response);
    console.log(error);
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
        {/* <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        /> */}
        {/* <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /> */}
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
        <Button
          variant="contained"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Signup
        </Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Box>
    </div>
  );
}

export default Signup;
