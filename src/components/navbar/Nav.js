import React from "react";
import "./nav.css";
import {
  Toolbar,
  AppBar,
  Link,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Nav() {
  return (
    <Box className="navperant">
      <AppBar position="static" className="navbar">
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              className="logo"
              component="img"
              sx={{ width: "100px" }}
              src=".\assets\logo.png"
            ></Typography>

            <Typography variant="h6" component="div">
              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{
                  mr: "15px",
                  ml: "15px",
                  padding: "20px 15px",
                  fontSize: "15px",
                  "&:hover": { color: "red", transition: "0.3s" },
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                underline="none"
                color="inherit"
                sx={{
                  mr: "15px",
                  ml: "15px",
                  padding: "20px 15px",
                  fontSize: "15px",
                }}
              >
                About
              </Link>
              <Link
                href="#services"
                underline="none"
                color="inherit"
                sx={{
                  mr: "15px",
                  ml: "15px",
                  padding: "20px 15px",
                  fontSize: "15px",
                }}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                underline="none"
                color="inherit"
                sx={{
                  mr: "15px",
                  ml: "15px",
                  padding: "20px 15px",
                  fontSize: "15px",
                }}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                underline="none"
                color="inherit"
                sx={{
                  mr: "15px",
                  ml: "15px",
                  padding: "20px 15px",
                  fontSize: "15px",
                }}
              >
                Contact
              </Link>
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Nav;
