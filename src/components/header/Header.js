import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "@fontsource/roboto/500.css";
import "./Header.css";
import { useMediaQuery } from "@mui/material";

const pages = ["Home", "About", "Services", "Skills", "Contact"];

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeLink, setActiveLink] = React.useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavLinkClick = (page) => {
    setActiveLink(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar sx={{ bgcolor: "#000", padding: "1rem" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between" }}
          className="smooth-scroll"
        >
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={handleOpenNavMenu}
              color="#222"
            >
              <MenuIcon sx={{ color: isSmallScreen ? "#ffbd38" : "#fff" }} />
            </IconButton>
            <Menu
              // sx={{ backgroundColor: "yellow" }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavLinkClick(page)}>
                  <Button
                    href={`#${page.toLowerCase()}`}
                    activeClassName="active"
                    onClick={handleCloseNavMenu}
                    style={{
                      padding: "2rem 4rem",
                      textDecoration: "none",
                      color: "#ad300b",
                      borderBottom: "none",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                    }}
                  >
                    {page.toLocaleUpperCase()}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h4"
              noWrap
              sx={{
                ml: 2,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                color: isSmallScreen ? "#ffbd38" : "#fff",
                textDecoration: "none",
                letterSpacing: "-0.05rem",
              }}
            >
              DEJI
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {pages.map((page) => (
              <Button
                component="a"
                href={`#${page.toLowerCase()}`}
                key={page}
                onClick={() => handleNavLinkClick(page)}
                sx={{
                  ml: 2,
                  borderRadius: "5px",
                  "&:hover":
                    page === "Contact"
                      ? { backgroundColor: "#e5aa32" }
                      : { borderBottom: "1px solid #e5aa32" },
                  display: { xs: "none", md: "flex" },
                  color: page === "Contact" ? "#222" : "#fff",
                  backgroundColor: page === "Contact" ? "#ffbd38" : "",

                  padding: page === "Contact" ? "0.5rem" : "",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
