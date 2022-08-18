import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="">
      This is homepage.
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button variant="contained">Sign Up</Button>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button variant="contained">Login</Button>
      </Link>
    </div>
  );
}

export default Home;
