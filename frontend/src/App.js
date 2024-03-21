import logo from './logo.svg';
import './App.css';
import Regsiter from './Components/Regsiter';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regitser" element={<Regsiter />} />

      </Routes>
      <Homepage />
    </div>
  );
}

export default App;
