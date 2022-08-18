import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(password,email);
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
        <Button
          variant="contained"
          onClick={(e) => {
            props.setLoggedin(true);
            handleSubmit(e);
          }}
        >
          Login
        </Button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </Box>
    </div>
  );
}

export default Login;
