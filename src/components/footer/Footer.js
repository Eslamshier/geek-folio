import React, { useEffect } from "react";
import "./Footer.css";
import {
  Box,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <Box>
      <Typography
        component="div"
        sx={{
          p: "80px 0",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Container>
          <Typography component="div" className="footer" data-aos="fade-up">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography
                  component="h2"
                  sx={{ mb: "20px", fontSize: "20px", color: "#fff" }}
                >
                  Address
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", color: "#ddd", opacity: "0.5" }}
                >
                  Egypt — Cairo, Arab Elswallhaa
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  component="h2"
                  sx={{ mb: "20px", fontSize: "20px", color: "#fff" }}
                >
                  Say Hello
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "16px",
                    color: "#ddd",
                    opacity: "0.5",
                    display: "block",
                    mb: "20px",
                  }}
                >
                  eslam.shoir@gmail.com
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "24px", color: "#fff" }}
                >
                  +02 010 1050 64 05
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography
                  component="h2"
                  sx={{ mb: "20px", fontSize: "20px", color: "#fff" }}
                >
                  Social
                </Typography>
                <Typography component="div" sx={{ mb: "10px" }}>
                  <Link
                    className="footer-link"
                    href="https://www.facebook.com/eslam.shoir/"
                    underline="none"
                    target="_blank"
                    sx={{
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#ddd",
                      opacity: "0.5",
                    }}
                  >
                    Facebook
                  </Link>
                </Typography>
                <Typography component="div" sx={{ mb: "10px" }}>
                  <Link
                    className="footer-link"
                    href="https://www.Twitter.com"
                    underline="none"
                    target="_blank"
                    sx={{
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#ddd",
                      opacity: "0.5",
                    }}
                  >
                    Twitter
                  </Link>
                </Typography>
                <Typography component="div" sx={{ mb: "10px" }}>
                  <Link
                    className="footer-link"
                    href="https://www.linkedin.com/in/eslam-shoir-497408287/"
                    underline="none"
                    target="_blank"
                    sx={{
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#ddd",
                      opacity: "0.5",
                    }}
                  >
                    Linkedin
                  </Link>
                </Typography>
                <Typography component="div" sx={{ mb: "10px" }}>
                  <Link
                    className="footer-link"
                    href="https://github.com/Eslamshier?tab=repositories"
                    underline="none"
                    target="_blank"
                    sx={{
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#ddd",
                      opacity: "0.5",
                    }}
                  >
                    Gmail
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  component="h2"
                  sx={{ mb: "20px", fontSize: "20px", color: "#fff" }}
                >
                  Newsletter
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", color: "#ddd", opacity: "0.5" }}
                >
                  <TextField
                    id="standard-basic"
                    label="Enter Email"
                    variant="standard"
                  />
                </Typography>
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </Typography>
      <Typography
        component="div"
        sx={{
          p: "40px 0",
        }}
      >
        <Container>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component="img"
              src="./assets/logo.png"
              sx={{ maxWidth: "120px" }}
            ></Typography>
            <Typography
              component="span"
              sx={{ color: "#ddd", fontSize: "13px" }}
            >
              © 2024 Geekfolio is Proudly Powered by Eslam Shoir
            </Typography>
          </Typography>
        </Container>
      </Typography>
    </Box>
  );
}

export default Footer;
