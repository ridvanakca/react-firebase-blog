import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Box } from "@mui/system";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  function signUserOut() {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  }

  return (
    <>
      <Navbar isAuth={isAuth} signUserOut={signUserOut} />
      <Box sx={{ width: "100%", maxWidth: "700px", textAlign: "center", margin: "0 auto" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
