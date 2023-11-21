import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import image1 from "../../assets/port3.jpeg";
import image2 from "../../assets/port3blur.png";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const textToPrint = "About Us";

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(textRef.current);
        }
      });
    }, options);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText(textToPrint.substring(0, index + 1));
        index++;
        if (index === textToPrint.length) {
          clearInterval(timer);
        }
      }, 100);
    }
  }, [isVisible, textToPrint]);

  const divStyle = {
    display: "flex",
    alignItems: "center",
    gap: isSmallScreen ? "2rem" : "3rem",
  };
  const handleGit = () => {
    window.location.href = "https://github.com/olumayokunayo";
  };
  return (
    <>
      <Container
        maxWidth="lg"
        id="about"
        sx={{
          height: isSmallScreen ? "100vh" : "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: isSmallScreen ? "-4rem" : "",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              gap: "6rem",
            }}
          >
            <Box sx={{ display: isSmallScreen ? "none" : "" }}>
              <LazyLoadImage
                src={image1}
                width={400}
                height={500}
                alt="user-img"
                placeholderSrc={image2}
                effect="blur"
              />
            </Box>
            <Box>
              <div ref={textRef}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    width: isSmallScreen ? "100%" : "50%",
                    fontWeight: 600,
                    position: "relative",
                  }}
                >
                  {displayText}
                </Typography>
              </div>
              <Typography
                variant="h1"
                sx={{
                  color: "#1a1a1a",
                  marginTop: "-3.5rem",
                  position: "relative",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  zIndex: -1,
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  color: "#999999",
                  position: "relative",
                  marginTop: "-1.8rem",
                }}
                fontSize={isSmallScreen ? "1rem" : ""}
              >
                Passionate frontend developer with expertise in crafting
                seamless and visually stunning web interfaces. Proficient in
                HTML, CSS, and JavaScript, specializing in framework like
                React.js. Committed to continuous learning and embracing
                challenges to create elegant solutions. Let's collaborate to
                turn your digital vision into reality! 👨‍💻✨
                {/* {displayText} */}
              </Typography>
              <Box>
                <Box
                  sx={{
                    marginTop: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div style={divStyle}>
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Name:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      Ayodeji Ogunfowora
                    </span>
                  </div>
                  <div style={divStyle}>
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Date of birth:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      February 04, 1998
                    </span>
                  </div>
                  <div style={divStyle}>
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Address:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      Jericho Ib, OY NG
                    </span>
                  </div>
                  <div style={divStyle}>
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Zip code:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      200272
                    </span>
                  </div>
                  <div style={divStyle}>
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Email:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      olumayokunayo@gmail.com
                    </span>
                  </div>
                  <div style={divStyle}>
                    <Typography variant="h6" sx={{ color: "#ffffff" }}>
                      Phone:
                    </Typography>
                    <span style={{ color: "#999999", fontSize: "1.3rem" }}>
                      +2349038001805
                    </span>
                  </div>
                </Box>
                <Button
                  sx={{
                    bgcolor: "#ffbd38",
                    "&:hover": { bgcolor: "orangered" },
                    transition: "ease-in-out",
                    borderRadius: "20px",
                    color: "#000",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    padding: "0.5rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                  }}
                  onClick={handleGit}
                >
                  <UseAnimations animation={github} size={30} color="#fff" />
                  <span style={{ textTransform: "none" }}>GitHub</span>
                </Button>
              </Box>
            </Box>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default About;
