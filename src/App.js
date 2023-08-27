import React,{useEffect, useState} from 'react';
import Home from './Component/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css'

function App() {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(()=>{
    const handleWindowMouseMove = e =>{
      setCoords({x:e.x,y:e.y})
    };
    
    window.addEventListener('mousemove',handleWindowMouseMove);
    return () => {window.removeEventListener('mousemove',handleWindowMouseMove)}
  },[])
  return (
    <div className="App">
      <div className='cursor' style={{left:`${coords.x}px`,top:`${coords.y}px`}}></div>
      <Home />
    </div>
  );
}

export default App;
