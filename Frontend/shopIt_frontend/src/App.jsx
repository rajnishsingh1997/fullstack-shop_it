import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import LoginPage from "./Pages/loginPage";
import SignupPage from "./Pages/SignupPage";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
