import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Profil from './Components/Profil';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <div className="App">
      {/* <Home/>
      <Login/> */}
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign up' element={<Login/>}></Route>
        <Route path='/profile' element={localStorage.getItem("token")?<Profil/> :<Login/> }></Route>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
