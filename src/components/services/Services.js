import { React, useEffect, useState } from "react";
import "./Services.css";
import {
  Container,
  Typography,
  Button,
  SvgIcon,
  Box,
  Link,
  Grid,
} from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Serjson, SliderSettings } from "./ApiServices";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
// import card from material ui
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@mui/material";

// import Accotdion from material ui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// animation
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <Box component="div" id="services" className="services">
      <div className="ser-swiper">
        <Swiper className="swiper" {...SliderSettings}>
          <Container className="Container">
            <div style={{ height: 0 }}>
              <h6 data-aos="fade-right">MAIN DIRECTIONS</h6>
              <div className="h-services">
                <div className="tit-services" data-aos="fade-right">
                  <span>servies</span>
                </div>
                <div className="text-services">
                  <p data-aos="fade-up">
                    Finding the best marketing solution for your
                    <br />
                    business. Driven by data based on human behavior.
                  </p>
                </div>
                <SliderBottons />
              </div>
            </div>
          </Container>

          {Serjson.map((card, i) => (
            <SwiperSlide key={i} className="SwiperSlide">
              <Card sx={{ maxWidth: 350 }} className="card" data-aos="fade-up">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className="img"
                    height="140"
                    image={card.image}
                    alt="ser-image"
                  />
                </CardActionArea>

                <CardActionArea>
                  <CardContent className="CardContent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="ser_title"
                    >
                      {card.titel}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="ser_prag"
                    >
                      {card.prag}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions sx={{ mt: "40px" }}>
                  <Button className="ser_bot_icon" sx={{ padding: "0" }}>
                    <SvgIcon>{card.icon}</SvgIcon>
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Grid
        container
        className="tetails-services"
        sx={{ display: "flex" }}
        columns={12}
      >
        <Grid item xs={6}>
          <Typography
            xs={6}
            className="tet-ser-right"
            component="img"
            src="./assets/service1.jpg"
            loading="lazy"
            sx={{ maxWidth: "100%", height: "100%" }}
          ></Typography>
        </Grid>

        <Grid
          item
          xs={6}
          className="tet-ser-left"
          sx={{ padding: "50px 100px", maxWidth: "100%" }}
        >
          <Typography
            className="ser-comp"
            component="div"
            sx={{ mb: "200px" }}
            data-aos="fade-left"
          >
            <Typography component="h5" className="ser-title">
              01. DIGITAL
            </Typography>
            <Typography component="h2">Luxury Glassware.</Typography>
            <Typography component="p" className="ser-p">
              We craft premium designs for agencies <br />
              and global brands around the globe.
            </Typography>
            <Link href="#" underline="none" className="ser-link">
              EXPLORE MORE <NorthEastOutlinedIcon />
            </Link>
          </Typography>

          <Typography
            className="ser-comp"
            component="div"
            sx={{ mb: "200px" }}
            data-aos="fade-left"
          >
            <Typography component="h5" className="ser-title">
              02. MARKETING
            </Typography>
            <Typography component="h2">Brand Identity.</Typography>
            <Typography component="p" className="ser-p">
              We craft premium designs for agencies and global brands around the
              <br />
              globe.
            </Typography>
            <Link href="#" underline="none" className="ser-link">
              EXPLORE MORE <NorthEastOutlinedIcon />
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Box component="section" className="collaps">
        <Container>
          <Grid
            container
            columns={12}
            spacing={5}
            sx={{
              padding: "120px 0",
              mt: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Grid item xs={6} sx={{ padding: "0 40px" }}>
              <Typography
                component="div"
                className="imags"
                sx={{ position: "relative", mb: "80px" }}
              >
                <Typography
                  component="div"
                  className="img-One"
                  data-aos="fade-down"
                >
                  <Typography
                    component="img"
                    src="./assets/collapse 2.jpg"
                    loading="lazy"
                    sx={{ width: "100%", height: "auto" }}
                  ></Typography>
                </Typography>

                <Typography
                  component="div"
                  className="img-Two"
                  data-aos="fade-up"
                >
                  <Typography
                    component="img"
                    src="./assets/collapse 1.jpg"
                    loading="lazy"
                    sx={{ width: "100%", height: "auto" }}
                  ></Typography>
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={6} sx={{ pt: "0 40px" }}>
              <Typography component="div" className="cont">
                <Typography component="div" className="text">
                  <Typography
                    component="h2"
                    sx={{ fontSize: "45px" }}
                    data-aos="fade-left"
                  >
                    Watch the creative <br /> process behind our
                    <br />
                    <Typography component="span" sx={{ fontSize: "45px" }}>
                      digital marketing...
                    </Typography>
                  </Typography>
                </Typography>

                <Typography
                  component="div"
                  className="accordion-per"
                  sx={{ mt: "40px" }}
                  data-aos="fade-left"
                >
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    className="accordion"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel1" ? (
                          <AddIcon />
                        ) : (
                          <RemoveOutlinedIcon />
                        )
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="accordion-head"
                    >
                      The Power of Influencer Marketing
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring <br /> which i enjoy with my whole.
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    className="accordion"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel2" ? (
                          <AddIcon />
                        ) : (
                          <RemoveOutlinedIcon />
                        )
                      }
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-head"
                    >
                      Unique and Influential Design
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring <br /> which i enjoy with my whole.
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    className="accordion"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel3" ? (
                          <AddIcon />
                        ) : (
                          <RemoveOutlinedIcon />
                        )
                      }
                      aria-controls="panel3-content"
                      id="panel3-header"
                      className="accordion-head"
                    >
                      We Build and Activate Brands
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring <br /> which i enjoy with my whole.
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;

const SliderBottons = () => {
  const swiper = useSwiper();

  return (
    <Typography component="div" className="icon-services" data-aos="fade-left">
      <Button
        aria-label="previous slide"
        className="ser-icon-prev"
        variant="outlined"
        sx={{ mr: "20px" }}
        onClick={() => swiper.slidePrev()}
      >
        <SvgIcon component={KeyboardArrowLeft} inheritViewBox />
      </Button>
      <Button
        aria-label="Next slide"
        className="ser-icon-next"
        variant="outlined"
        onClick={() => swiper.slideNext()}
      >
        <SvgIcon component={KeyboardArrowRight} inheritViewBox />
      </Button>
    </Typography>
  );
};
