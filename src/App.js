import "./App.css";
import Login from "./Components/LoginForm/Login";
import Phone from "./Components/Phone/Phone";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/RegisterForm/Register";
import Home from "./Components/Home/Home.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
