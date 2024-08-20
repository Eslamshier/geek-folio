/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import "./Header.css";

import { Box, Container, Typography } from "@mui/material";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <div className="h-header" sx={{ position: "relative" }}>
      <div className="header"></div>
      <div className="overlay"></div>
      <div className="h-body">
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="h-right" data-aos="fade-right">
            <h4>Digital agency studio</h4>
            <h1>a creative digital design studio</h1>
          </div>
          <div className="h-left">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              data-aos="fade-left"
            >
              <Typography
                className="imag_box"
                component="div"
                sx={{ width: "230px" }}
              >
                <Typography
                  className="avatar"
                  component="img"
                  sx={{ width: "300px" }}
                  src="https://static.wixstatic.com/media/247749_249b3bd578a045faa0c4d5df980c57c0~mv2.png/v1/fill/w_460,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/blue_edited_edited.png"
                  loading="lazy"
                ></Typography>
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                EXPLORE
                <br /> OUR
                <br /> PORTFOLIO
              </Typography>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
