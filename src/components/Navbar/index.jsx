import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Home", "CreatePost", "Login"];

const Navbar = ({ isAuth, signUserOut }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: "black" }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/' style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>
              </MenuItem>

              {!isAuth ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to='/login' style={{ textDecoration: "none", color: "black" }}>
                    Login
                  </Link>
                </MenuItem>
              ) : (
                <div>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to='/createpost' style={{ textDecoration: "none", color: "black" }}>
                      CreatePost
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button onClick={signUserOut} style={{ textTransform: "none", color: "black", fontSize: "1rem" }}>
                      Logout
                    </Button>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            Blog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" }}>
            <Link to='/' onClick={handleCloseNavMenu} style={{ margin: "1rem", color: "white", display: "block", textDecoration: "none", fontSize: "1.4rem" }}>
              Home
            </Link>
            {!isAuth ? (
              <Link to='/login' onClick={handleCloseNavMenu} style={{ margin: "1rem", color: "white", display: "block", textDecoration: "none", fontSize: "1.4rem" }}>
                Login
              </Link>
            ) : (
              <>
                <Link to='/createpost' onClick={handleCloseNavMenu} style={{ margin: "1rem", color: "white", display: "block", textDecoration: "none", fontSize: "1.4rem" }}>
                  CreatePost
                </Link>
                <Button onClick={signUserOut} style={{ textTransform: "none", margin: "1rem", color: "white", display: "block", fontSize: "1.4rem" }}>
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
