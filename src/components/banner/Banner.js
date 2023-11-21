import React, { useState } from "react";
import Slider from "react-slick";
import bannerImg from "../../assets/port3.jpeg";
import "./Banner.css";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const Banner = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleWorks = () => {
    setIsLoading(true);
    navigate("/projects");
  };
  const HandleHire = () => {
    navigate("/hire");
  };
  return (
    <>
      {isLoading && <Loader />}
      <Container maxWidth="lg" sx={{ paddingTop: "5rem", height: "100vh" }}>
        <Slider {...settings}>
          <Box className="slide-container">
            <Box className="slide-content">
              <div className="slide-text">
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ffbd38",
                    textAlign: isSmallScreen ? "center" : "",
                    marginRight: isSmallScreen ? "8rem" : "",
                    fontWeight: 600,
                  }}
                >
                  HELLO!
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    width: isSmallScreen ? "80%" : "90%",
                    fontWeight: 600,
                    fontSize: isSmallScreen ? "3rem" : "6rem",
                    textAlign: isSmallScreen ? "center" : "",
                    marginLeft: isSmallScreen ? "-1rem" : "",
                  }}
                >
                  I'm{" "}
                  <span style={{ color: "#ffbd38" }}>Ayodeji Ogunfowora</span>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    textAlign: isSmallScreen ? "center" : "",
                    marginRight: isSmallScreen ? "8rem" : "",
                    fontSize: isSmallScreen ? "1.3rem" : "",
                    marginTop: isSmallScreen ? "1rem" : "",
                    marginBottom: isSmallScreen ? "3rem" : "",
                  }}
                >
                  A frontend developer
                </Typography>
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "1rem",
                    marginLeft: isSmallScreen ? "2rem" : "",
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#ffbe22",
                      width: isSmallScreen ? "30%" : "15%",
                      color: "#000",
                      borderRadius: "20px",
                      padding: "0.5rem 1rem",
                      "&:hover": {
                        bgcolor: "orangered",
                      },
                    }}
                    onClick={HandleHire}
                  >
                    Hire
                  </Button>

                  <Button
                    sx={{
                      bgcolor: "transparent",
                      width: isSmallScreen ? "30%" : "15%",
                      color: "#fff",
                      border: "1px solid #fff",
                      borderRadius: "20px",
                      padding: "0.5rem 1rem",
                    }}
                    onClick={handleWorks}
                  >
                    Projects
                  </Button>
                </div>
              </div>
              <img src={bannerImg} alt="Image 1" />
            </Box>
          </Box>
          <Box className="slide-container">
            <Box className="slide-content">
              <div className="slide-text">
                <Typography
                  variant="body2"
                  sx={{
                    color: "#ffbd38",
                    fontSize: isSmallScreen ? "1rem" : "",
                    textAlign: isSmallScreen ? "center" : "",
                    marginRight: isSmallScreen ? "21rem" : "",
                    fontWeight: 600,
                  }}
                >
                  HELLO!
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    width: isSmallScreen ? "50%" : "100%",
                    fontWeight: 600,
                    textAlign: isSmallScreen ? "center" : "",
                    fontSize: isSmallScreen ? "2.4rem" : "4rem",
                    marginBottom: isSmallScreen ? "3rem" : "",
                  }}
                >
                  I'm a <span style={{ color: "#ffbd38" }}>web developer</span>{" "}
                  <span> based in Nigeria</span>
                </Typography>

                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "1rem",
                    marginLeft: isSmallScreen ? "2rem" : "",
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#ffbd38",
                      width: isSmallScreen ? "20%" : "15%",
                      color: "#000",
                      borderRadius: "20px",
                      padding: "0.5rem 1rem",
                      "&:hover": {
                        bgcolor: "#ffbd38",
                      },
                    }}
                    onClick={HandleHire}
                  >
                    Hire
                  </Button>

                  <Button
                    sx={{
                      bgcolor: "transparent",
                      width: isSmallScreen ? "20%" : "15%",
                      color: "#fff",
                      border: "1px solid #fff",
                      borderRadius: "20px",
                      padding: "0.5rem 1rem",
                    }}
                    onClick={handleWorks}
                  >
                    Projects
                  </Button>
                </div>
              </div>
              <img src={bannerImg} alt="Image 1" />
            </Box>
          </Box>
        </Slider>
      </Container>
    </>
  );
};

export default Banner;
