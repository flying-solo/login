import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { useState } from "react";
import Authorised from './Authorised';
import Protected from './Protected';

function App() {
  const [loggedin, setLoggedin] = useState(false);
  
  const logIn = () => {
    setLoggedin(true);
    };
    const logOut = () => {
      setLoggedin(false);
    };

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home loggedin={loggedin} logIn={logIn} logOut={logOut}/>} />
        <Route exact path='/login' element={<Login login={logIn}/>} />
        <Route exact path='/signup' element={<Signup login={logIn}/>} />
        <Route exact path='/profile' element={<Protected isLoggedIn={loggedin}><Authorised/></Protected>} />
      </Routes>
    </Router>
  );
}

export default App;
