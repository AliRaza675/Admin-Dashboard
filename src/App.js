// eslint-disable-next-line
import './App.css';

import Menu from '../src/Components/menu'
// import Khota from '../src/Components/test'
import Container from './Container';
import menuNew from './Components/menuNew'
import LoginScreen from './Components/LoginScreen';
import PatientProfile from './Components/PatientProfile';

import { Router, Route, Link } from 'react-router-dom';


function App() {
  
  return (

    // <Router>
    //   <nav>
    //     <Link to="/">Login</Link>
    //   </nav>
    
    //   <Route exact path='/' Component={LoginScreen}/>
    //   <Route exact path='/Dashboard' Component={Container}/>

    // </Router>




    
    <div className="App">

     <Menu/>
     {/* <menuNew /> */}
     <Container/>
     {/* <LoginScreen/> */}
     {/* <PatientProfile/> */}
     
     {/* <Khota/> */}

    </div>
  );

}

export default App;
