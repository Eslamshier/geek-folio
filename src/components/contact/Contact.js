import React, { useEffect } from "react";
import "./Contact.css";
import {
  Box,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <Box
      id="contact"
      className="contact"
      sx={{ padding: "120px 0", backgroundColor: "#1D1D1D" }}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} data-aos="fade-right">
            <Typography
              component="h6"
              sx={{
                fontSize: "14px",
                fontWeight: "300",
                textTransform: "uppercase",
                letterSpacing: "2px",
                mb: "10px",
                color: "#fff",
                opacity: "0.8",
              }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: "50px",
                fontWeight: "600",
                lineHeight: "1.3",
                mb: "10px",
                color: "#fff",
                fontFamily: "Sora,sans-serif",
              }}
            >
              Let's make your
              <br /> brand brilliant!
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "15px",
                fontWeight: "300",
                lineHeight: "1.8",
                mb: "10px",
                color: "#ddd",
                fontFamily: "Sora,sans-serif",
              }}
            >
              If you would like to work with us or just want to get in touch,
              we’d love
              <br /> to hear from you!
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "1.3",
                mt: "30px",
                color: "#c9f31d",
                borderBottom: "1px solid #c9f31d",
              }}
            >
              +1 840 841 25 69
            </Typography>
            <Typography
              component="div"
              className="contact-links"
              sx={{
                display: "flex",
                mt: "60px",
              }}
            >
              <Link
                href="https://www.facebook.com/eslam.shoir/"
                underline="none"
                target="_blank"
                sx={{ mr: "30px", color: "#fff", fontSize: "14px" }}
              >
                Facebook
              </Link>
              <Link
                href="https://www.Twitter.com"
                underline="none"
                target="_blank"
                sx={{ mr: "30px", color: "#fff", fontSize: "14px" }}
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/eslam-shoir-497408287/"
                underline="none"
                target="_blank"
                sx={{ mr: "30px", color: "#fff", fontSize: "14px" }}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Eslamshier?tab=repositories"
                underline="none"
                target="_blank"
                sx={{ mr: "30px", color: "#fff", fontSize: "14px" }}
              >
                GitHub
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography component="div" className="contact form">
              <form>
                <Grid container spacing={3} data-aos="fade-left">
                  <Grid xs={12} sm={6} item>
                    <TextField
                      type="text"
                      label="Frist Name"
                      placeholder="Enter frist name"
                      variant="outlined"
                      required
                      fullWidth
                      sx={{ color: "#fff" }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      type="text"
                      label="Last Name"
                      placeholder="Enter last name"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="text"
                      label="Subject"
                      placeholder="Enter Subject"
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      label="Message"
                      placeholder="Enter Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button type="submit" variant="outlined" fullWidth>
                      let's Talk
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
