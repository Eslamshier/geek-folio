import React, { useEffect } from "react";
import "./blog.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Testeam } from "../testimonials/TestimonialsApi";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <Box component="section" className="blog" sx={{ padding: "120px 0" }}>
      <Container>
        <Typography
          component="div"
          className="blog-head"
          sx={{ mb: "80px" }}
          data-aos="fade-right"
        >
          <Typography component="h6">THE AVENGERS</Typography>
          <Typography component="h1">Meet Our Team.</Typography>
        </Typography>

        <Typography className="our-team" component="div">
          <Grid container spacing={4}>
            {Testeam.map((card, i) => (
              <Grid item xs={3} key={i}>
                <Typography
                  component="img"
                  alt="img-team"
                  sx={{ width: "100%", borderRadius: "4px" }}
                  src={card.image}
                  data-aos="fade-up"
                />

                <Typography
                  component="h6"
                  sx={{
                    color: "#fff",
                    opacity: "0.8",
                    fontSize: "14px",
                    mt: "20px",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    textTransform: "capitalize",
                  }}
                >
                  {card.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
}

export default Blog;
