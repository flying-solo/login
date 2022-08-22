import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Authorised from './Authorised';
import Protected from './Protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/profile' element={<Protected><Authorised/></Protected>} />
      </Routes>
    </Router>
  );
}

export default App;
