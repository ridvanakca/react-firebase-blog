import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function signInWithGoogle() {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  }

  return (
    <Box>
      <Typography variant='subtitle1' mt={5} mb={3}>
        Sign In With Google to Continue
      </Typography>
      <Button variant='outlined' onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Login;
