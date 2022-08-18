import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link} from 'react-router-dom';

function Login() {
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
          mt: 5
        }}
      >
        <Box sx={{fontSize: 'h5.fontSize'}}>Login</Box>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
        <TextField id="outlined-basic" label="Passowrd" variant="outlined" type="password" />
        <Button variant="contained">Login</Button>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </Box>
    </div>
  );
}

export default Login;
