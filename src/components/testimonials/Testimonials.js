import { React, Fragment, useEffect } from "react";
import "./Testimonials.css";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { SliderSettings, Tesjson } from "./TestimonialsApi";
import TelegramIcon from "@mui/icons-material/Telegram";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <Box>
      <Typography
        component="div"
        className="testimonials"
        id="testimonials"
        sx={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
      >
        <Container>
          <Typography
            component="div"
            className="tes-head"
            sx={{ mb: "100px" }}
            data-aos="fade-right"
          >
            <Typography
              component="h6"
              className="orangeText"
              sx={{ mb: "8px" }}
            >
              WHAT CLIENTS SAYS?
            </Typography>
            <Typography component="h1" className="primaryText">
              Testimonials
            </Typography>
          </Typography>

          <Swiper
            {...SliderSettings}
            style={{ overflow: "visible" }}
            data-aos="fade-left"
          >
            <SliderBottons />
            {Tesjson.map((card, i) => (
              <SwiperSlide className="Swiper" key={i}>
                <Typography component="div" className="r-card flexColStart">
                  <Typography
                    component="div"
                    className="icon"
                    sx={{ display: "flex", mb: "20px", fontSize: "12px" }}
                  >
                    {card.icon}
                    {card.icon}
                    {card.icon}
                    {card.icon}
                    {card.icon}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      mb: "40px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#333",
                    }}
                  >
                    {card.prag}
                  </Typography>
                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      component="img"
                      className="img"
                      sx={{
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        mr: "20px",
                      }}
                      src={card.image}
                    ></Typography>

                    <Typography component="div">
                      <Typography
                        component="h6"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "1.3",
                          textTransform: "capitalize",
                          mb: "0.5rem",
                          color: "#212529",
                        }}
                      >
                        {card.name}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#212529",
                          opacity: "0.7",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>

          <Typography
            component="div"
            sx={{
              pt: "100px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              component="img"
              src="./assets/1.png"
              sx={{ width: "100px" }}
            />
            <Typography
              component="img"
              src="./assets/2.png"
              sx={{ width: "100px" }}
            />
            <Typography
              component="img"
              src="./assets/3.png"
              sx={{ width: "100px" }}
            />
            <Typography
              component="img"
              src="./assets/4.png"
              sx={{ width: "100px" }}
            />
            <Typography
              component="img"
              src="./assets/5.png"
              sx={{ width: "100px" }}
            />
          </Typography>
        </Container>
      </Typography>

      <Typography
        component="div"
        className="tes-box"
        sx={{
          position: "relative",
          height: "100%",
          zIndex: "5",
        }}
      >
        <Typography component="div" className="overlay"></Typography>
        <Typography component="div" className="tes-box-details">
          <Container>
            <Typography
              component="div"
              className="box-details"
              sx={{
                display: "flex",
                position: "absolute",
                bottom: "0",
                zIndex: "10",
              }}
              data-aos="fade-up"
            >
              <Typography
                component="div"
                className="box-one"
                sx={{
                  mr: "30px",
                  display: "flex",
                  alignItems: "center",
                  padding: "40px 30px",
                  backgroundColor: "#1d1d1d",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    mr: "30px",
                    fontSize: "40px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  5920
                </Typography>
                <Typography
                  component="h5"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Succeeded <br /> Projects
                </Typography>
              </Typography>

              <Typography
                component="div"
                className="box-blur"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component="h5"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Huge Template <br /> Collection.
                </Typography>
                <Typography component="span">
                  <TelegramIcon />
                </Typography>
              </Typography>
            </Typography>
          </Container>
        </Typography>
      </Typography>
    </Box>
  );
}

export default Testimonials;

const SliderBottons = () => {
  const swiper = useSwiper();

  return (
    <Typography component="div" className="icon-tes" data-aos="fade-left">
      <Button
        aria-label="previous slide"
        className="tes-icon-prev"
        variant="outlined"
        sx={{ mr: "20px" }}
        onClick={() => swiper.slidePrev()}
      >
        <SvgIcon component={KeyboardArrowLeft} inheritViewBox />
      </Button>
      <Button
        aria-label="Next slide"
        className="tes-icon-next"
        variant="outlined"
        onClick={() => swiper.slideNext()}
      >
        <SvgIcon component={KeyboardArrowRight} inheritViewBox />
      </Button>
    </Typography>
  );
};
