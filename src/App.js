import React, {useState, Routes, Route} from 'react';
import Login from './Login';
import './App.css';
import Home from './Home';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <div className="App">
      {(!isLoggedIn)?
      <Login login={setIsLoggedIn}/>:
      <>
      <Home/>
      
      </>
      }

    </div>
  );
}

export default App;
