import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px");
  const headerStyle = {
    color: "#fff",
    fontSize: isSmallScreen ? "1.2rem" : "",
  };
  const iconStyle = {
    color: "#ffbd38",
    textDecoration: "none",
    cursor: "pointer",
  };
  const iconDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3rem",
    width: "3rem",
    borderRadius: " 50%",
    backgroundColor: "#1a1a1a",
  };
  const handleTwitter = () => {
    window.location.href = "https://twitter.com/olumayokundev";
  };
  const handleLinkedin = () => {
    window.location.href =
      "https://www.linkedin.com/in/olumayokun-ogunfowora-708544262/";
  };
  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/olumayokunayo/";
  };
  const year = new Date().getFullYear();
  return (
    <Container>
      <Container
        maxWidth="lg"
        sx={{
          height: "80vh",
          marginTop: isSmallScreen ? "10rem" : "",
          display: "flex",
          alignItems: "center",
          fontSize: "4rem",
        }}
      >
        {" "}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" style={headerStyle}>
              About
            </Typography>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography sx={{ color: "#a3a3a3", marginBottom: "2rem" }}>
                Passionate frontend developer with expertise in crafting
                seamless and visually stunning web interfaces. Proficient in
                HTML, CSS, and JavaScript, specializing in framework like
                React.js 👨‍💻✨
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={iconDivStyle}>
                  <TwitterIcon style={iconStyle} onClick={handleTwitter} />
                </div>
                <div style={iconDivStyle}>
                  <LinkedInIcon style={iconStyle} onClick={handleLinkedin} />
                </div>
                <div style={iconDivStyle}>
                  <InstagramIcon style={iconStyle} onClick={handleInstagram} />
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography variant="h5" style={headerStyle}>
              Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isSmallScreen ? "1rem" : "2rem",
                marginTop: "2rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                }}
                component="a"
                href="#home"
              >
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>Home</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                }}
                component="a"
                href="#about"
              >
                <ArrowRightAltIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>About</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={8} sm={2} sx={{ marginTop: " 3.5rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                marginBottom: "2rem",
              }}
              component="a"
              href="#contact"
            >
              <ArrowRightAltIcon style={iconStyle} />
              <Typography style={{ color: "#a3a3a3" }}>Contact</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                marginBottom: "2rem",
              }}
              component="a"
              href="#services"
            >
              <ArrowRightAltIcon style={iconStyle} />
              <Typography style={{ color: "#a3a3a3" }}>Services</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
              }}
              component="a"
              href="/github.com/olumayokunayo"
            >
              <ArrowRightAltIcon style={iconStyle} />
              <Typography style={{ color: "#a3a3a3" }}>Projects</Typography>
            </Box>
          </Grid>

          <Grid item xs={8} sm={3}>
            <Typography variant="h5" style={headerStyle}>
              Have a Questions?
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isSmallScreen ? "1rem" : "2rem",
                marginTop: "2rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <LocationOnIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>
                  Jericho Ib, OY0 STATE, NIGERIA.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <CallIcon style={iconStyle} />
                <Typography style={{ color: "#a3a3a3" }}>
                  +2349038001805
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Typography
        sx={{
          color: "#a3a3a3",
          textAlign: "center",
          marginTop: isSmallScreen ? "3rem" : "",
        }}
      >
        This portfolio belongs to Ayodeji Ogunfowora 👨🏿‍💻 {year}.
      </Typography>
    </Container>
  );
};

export default Footer;
