import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password, email);
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
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
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
