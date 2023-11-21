import React, { useEffect, useRef, useState } from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { SiSololearn } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import { DiResponsive } from "react-icons/di";
import { SiRobotframework } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { VscSymbolInterface } from "react-icons/vsc";
import { TbBoxMultiple3 } from "react-icons/tb";
import { SiMaterialdesign } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";

const Services = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px");
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const textToPrint = "Services";

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
  const headerStyle = {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#fff",
  };
  const iconStyle = {
    fontSize: "2rem",
    color: "#ffbd38",
  };
  const gridStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    "&:hover": { backgroundColor: "#ffbd38" },
    marginTop: "1rem",
    marginLeft: "3rem",
    padding: isSmallScreen ? "3rem 2rem" : "3rem 5rem",
    borderRadius: "10px",
    textAlign: "center",
    width: isSmallScreen ? "100%" : "",
  };
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          height: isSmallScreen ? "100vh" : "140vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isSmallScreen ? "15rem" : "",
          marginBottom: isSmallScreen ? "10rem" : "",
        }}
        id="services"
      >
        <Container>
          <div ref={textRef}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "#fff",
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
              textAlign: isSmallScreen ? "left" : "center",
              color: "#1a1a1a",
              marginTop: "-3.5rem",
              position: "relative",
              fontWeight: 600,
              letterSpacing: isSmallScreen ? "" : ".1rem",
              zIndex: -1,
              fontSize: isSmallScreen ? "5rem" : "5rem",
            }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              width: isSmallScreen ? "100%" : "80%",
              margin: "auto",
              color: "#999999",
              position: "relative",
              marginTop: "-1.8rem",
            }}
            fontSize={isSmallScreen ? "1rem" : ""}
          >
            Unlock the potential of your digital presence with my comprehensive
            range of services. From dynamic web development and intuitive user
            interface design to responsive solutions and collaborative
            frameworks, I am dedicated to transforming your vision into a
            compelling reality.
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{
              marginTop: "2rem",
              maxHeight: "100vh",
              overflow: "scroll",
            }}
          >
            <Grid item xs={12} sm={2} style={gridStyle}>
              <SiMaterialdesign style={iconStyle} />
              <Typography style={headerStyle}>Web Development</Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <VscSymbolInterface style={iconStyle} />
              <Typography style={headerStyle}>
                User Interface (UI) Design
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <SiAdobeindesign style={iconStyle} />
              <Typography style={headerStyle}>
                User Experience (UX) Design
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <SiRobotframework style={iconStyle} />
              <Typography style={headerStyle}>
                Frontend Frameworks and Libraries
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <DiResponsive style={iconStyle} />
              <Typography style={headerStyle}>Responsive Web Design</Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <FcCollaboration style={iconStyle} />
              <Typography style={headerStyle}>
                Collaboration with Backend Developers
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <AiFillGithub style={iconStyle} />
              <Typography style={headerStyle}>Version Control</Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <SiSololearn style={iconStyle} />
              <Typography style={headerStyle}>Continuous Learning</Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <TbBoxMultiple3 style={iconStyle} />
              <Typography style={headerStyle}>
                Cross-Browser Compatibility
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <CgPerformance style={iconStyle} />
              <Typography style={headerStyle}>
                Performance Optimization
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <FaNodeJs style={iconStyle} />
              <Typography style={headerStyle}>Node.js</Typography>
            </Grid>
            <Grid item xs={12} sm={2} style={gridStyle}>
              <SiFirebase style={iconStyle} />
              <Typography style={headerStyle}>Firebase</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Services;
