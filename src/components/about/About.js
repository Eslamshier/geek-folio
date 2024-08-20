import React, { useEffect } from "react";
import "./About.css";
import { Box, Container, Grid, Typography } from "@mui/material";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <Box component="div" id="about">
      <Container>
        <Typography className="row" component="div" sx={{ display: "flex" }}>
          <Grid container spacing={2} columns={12}>
            <Grid xs={6} sx={{ padding: "40px 25px" }}>
              <h6 className="ab_title" data-aos="fade-right">
                ABOUT US.
              </h6>
              <h3 className="ab_text" data-aos="fade-right">
                We are a <span className="span_about">full–service</span>
                <br />
                creative studio
                <br />
                revolutionize web design.
              </h3>
              <p className="ab_prag" data-aos="fade-right">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna
                <br />
                aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor
                incididunt.
              </p>
              <Grid
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: "40px",
                }}
              >
                <Grid
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  data-aos="fade-right"
                >
                  <Typography
                    component="span"
                    className="stoke"
                    sx={{ marginRight: "30px" }}
                  >
                    12K
                  </Typography>
                  <Typography component="div">
                    <Typography component="h6" className="ab_title ">
                      HAPPY USERS <br />
                      AROUND WORLD
                    </Typography>
                  </Typography>
                </Grid>
                <Grid
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  data-aos="fade-left"
                >
                  <Typography
                    component="span"
                    className="stoke"
                    sx={{ marginRight: "30px" }}
                  >
                    30K
                  </Typography>
                  <Typography component="div">
                    <Typography component="h6" className="ab_title ">
                      PROJECTS <br />
                      ALREADY DONE
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={6} sx={{ padding: "0 25px" }} data-aos="fade-left">
              <Typography
                xs={6}
                component="div"
                sx={{ position: "relative", overflow: "hidden" }}
              >
                <Typography
                  component="img"
                  src=".\assets\img_about.jpg"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                ></Typography>

                <Typography
                  component="div"
                  className="ab_sodo"
                  sx={{
                    position: "absolute",
                    zIndex: "3",
                    bottom: "0",
                    right: "0",
                    padding: "40px",
                    backgroundColor: "#1B1B1B",
                  }}
                >
                  <Typography
                    component="h2"
                    className="ab_h2"
                    sx={{
                      fontSize: "45px",
                      fontWeight: "600",
                      lineHeight: "1.3",
                    }}
                  >
                    28+
                  </Typography>
                  <Typography component="p" className="ab_title">
                    years of experience
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Container>
      <Typography component="div" className="box" sx={{ display: "flex" }}>
        <Typography component="div" className="item">
          <Typography component="h2">
            UI_UX
            <Typography component="span" className="stroke">
              EXPERIeNCE
            </Typography>
          </Typography>
        </Typography>

        <Typography component="div" className="item">
          <Typography component="h2">
            Web
            <Typography component="span" className="stroke">
              development
            </Typography>
          </Typography>
        </Typography>

        <Typography component="div" className="item">
          <Typography component="h2">
            digital
            <Typography component="span" className="stroke">
              marktink
            </Typography>
          </Typography>
        </Typography>

        <Typography component="div" className="item">
          <Typography component="h2">
            Font
            <Typography component="span" className="stroke">
              end
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Box>
  );
}

export default About;
