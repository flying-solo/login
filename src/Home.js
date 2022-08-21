import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home(props) {
  return (
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
      This is homepage.
      {props.loggedin ? (
        <p>
          You are logged in.
          <br />
          <br />
          <Link to="/profile"><Button variant="contained">Profile</Button></Link>
          <Button variant="contained" onClick={()=>{props.logOut()}}>Logout</Button>
        </p>
      ) : (
        <>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              onClick={()=>{props.logIn()}}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" onClick={()=>{props.logIn()}}>Login</Button>
          </Link>
        </>
      )}
    </Box>
  );
}

export default Home;
