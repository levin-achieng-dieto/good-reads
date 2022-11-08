import './App.css';
import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Books from './components/Books'
import Signup from './components/Signup'
import Login from './components/Login'
import AddBooks from './components/AddBooks'

function App() {
  return (
    <Routes>
      <Route path="/" element = {<LandingPage />} />
      <Route path="/Books" element = {<Books />} />
      <Route path="/Signup" element = {<Signup />} />
      <Route path="/Login" element = {<Login />} />
      <Route path="/AddBooks" element = {<AddBooks />} />
    </Routes>
  );
}

export default App;
