import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import radblogImg from "../../assets/radblog.png";
import portfolioImg from "../../assets/portfolio.png";
import movieBoxImg from "../../assets/moviebox.png";
import lolmartImg from "../../assets/lolmart.png";
import hallmarkImg from "../../assets/hallmark.png";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import LanguageIcon from "@mui/icons-material/Language";

const Project = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: 600,
              position: "relative",
            }}
          >
            Projects
          </Typography>
          <Typography
            sx={{
              fontSize: "4rem",
              textAlign: "center",
              color: "#1a1a1a",
              marginTop: "-3.5rem",
              position: "relative",
              fontWeight: 600,
              letterSpacing: ".1rem",
              zIndex: -1,
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={4}>
            <Grid xs={12} sx={{ marginTop: "4rem" }}>
              <Box
                sx={{
                  display: isSmallScreen ? "block" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={radblogImg}
                  alt=""
                  style={{
                    padding: "1rem",
                    height: "500px",
                    width: isSmallScreen ? "100%" : "50%",
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      padding: "1rem",
                      color: "#b6b6b6",
                      width: "100%",
                      lineHeight: 1.6,
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Introducing RadBlog, a dynamic and user-friendly blog
                    platform featured in my portfolio. With RadBlog, users
                    experience seamless interaction and engagement. This project
                    leverages cutting-edge technologies, including Firebase for
                    secure and efficient authentication, Material UI for a
                    polished and intuitive user interface, and Redux for state
                    management. Users can effortlessly sign in using Google or
                    email, unlocking a personalized experience where they can
                    like and bookmark favorite posts. The search functionality
                    allows users to explore the vast array of content with ease.
                    RadBlog is more than just a blog; it's a showcase of my
                    proficiency in creating immersive web experiences. Explore
                    RadBlog in my portfolio and witness firsthand how it
                    combines functionality, aesthetics, and interactivity to
                    redefine the modern blogging experience.
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      component="a"
                      href="https://github.com/olumayokunayo/radblog"
                      sx={{
                        bgcolor: "#ffbd38",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <UseAnimations
                        animation={github}
                        size={30}
                        color="#fff"
                      />
                      <span style={{ textTransform: "none" }}>GitHub</span>
                    </Button>
                    <Button
                      component="a"
                      href="https://radblogging.netlify.app"
                      sx={{
                        bgcolor: "#fff",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <LanguageIcon />
                      <span style={{ textTransform: "none" }}>Website</span>
                    </Button>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ marginTop: "3rem" }}>
              <Box
                sx={{
                  display: isSmallScreen ? "block" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={lolmartImg}
                  alt=""
                  style={{
                    padding: "1rem",
                    height: "500px",
                    width: isSmallScreen ? "100%" : "50%",
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      padding: "1rem",
                      color: "#b6b6b6",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Meet LolMart, the epitome of an exceptional e-commerce store
                    featured in my portfolio. LolMart seamlessly blends style
                    and functionality to deliver an unparalleled shopping
                    experience. The project boasts robust features, including a
                    secure authentication system for both users and
                    administrators. LolMart comes equipped with advanced
                    filtering and sorting options, allowing users to navigate
                    through a diverse product catalog effortlessly. Admins can
                    easily manage products through a dedicated admin panel,
                    streamlining the process of adding new items and maintaining
                    an up-to-date inventory. The integration of Stripe for
                    payment processing ensures a smooth and secure checkout
                    process, adding an extra layer of convenience for users.
                    Whether you're exploring LolMart on your desktop or mobile
                    device, its responsive design guarantees a consistent and
                    enjoyable shopping journey. Explore LolMart in my portfolio
                    to witness how it redefines e-commerce by combining
                    sophisticated functionality with an intuitive and visually
                    appealing user interface.
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      component="a"
                      href="https://github.com/olumayokunayo/LOLSTORE"
                      sx={{
                        bgcolor: "#ffbd38",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <UseAnimations
                        animation={github}
                        size={30}
                        color="#fff"
                      />
                      <span style={{ textTransform: "none" }}>GitHub</span>
                    </Button>
                    <Button
                      component="a"
                      href="https://lolmart.netlify.app"
                      sx={{
                        bgcolor: "#fff",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <LanguageIcon />
                      <span style={{ textTransform: "none" }}>Website</span>
                    </Button>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ marginTop: "3rem" }}>
              <Box
                sx={{
                  display: isSmallScreen ? "block" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={movieBoxImg}
                  alt=""
                  style={{
                    padding: "1rem",
                    height: "500px",
                    width: isSmallScreen ? "100%" : "50%",
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b6b6b6",
                      width: "100%",
                      textAlign: "center",
                      padding: "1rem",
                    }}
                  >
                    Welcome to MovieBox, a dazzling gem within my portfolio that
                    brings the magic of cinema to your fingertips. MovieBox is
                    not just a movie website; it's an immersive experience where
                    seamless design meets powerful functionality. Dive into a
                    vast collection of movies, all thanks to robust API
                    integrations. The intuitive search functionality ensures you
                    can find your favorite movies with ease.
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      component="a"
                      href="https://github.com/olumayokunayo/movie-box"
                      sx={{
                        bgcolor: "#ffbd38",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <UseAnimations
                        animation={github}
                        size={30}
                        color="#fff"
                      />
                      <span style={{ textTransform: "none" }}>GitHub</span>
                    </Button>
                    <Button
                      component="a"
                      href="https://mymovieboxxed.netlify.app"
                      sx={{
                        bgcolor: "#fff",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <LanguageIcon />
                      <span style={{ textTransform: "none" }}>Website</span>
                    </Button>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ marginTop: "3rem" }}>
              <Box
                sx={{
                  display: isSmallScreen ? "block" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={hallmarkImg}
                  alt=""
                  style={{
                    padding: "1rem",
                    height: "500px",
                    width: isSmallScreen ? "100%" : "50%",
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b6b6b6",
                      width: "100%",
                      textAlign: "center",
                      padding: "1rem",
                    }}
                  >
                    Step into the world of finance with the Hallmark Finance
                    Site, a sophisticated project in my portfolio that
                    effortlessly integrates with robust APIs, offering a
                    comprehensive suite of real-time financial data and
                    insights. Here's a glimpse into the features that make this
                    project stand out: Real-time Financial Data, Insightful
                    Blogs, Top 100 Cryptocurrencies, Interactive Tables.
                    Hallmark Finance Site is not just a website; it's a dynamic
                    platform for those passionate about finance.
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      component="a"
                      href=""
                      sx={{
                        bgcolor: "#ffbd38",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <UseAnimations
                        animation={github}
                        size={30}
                        color="#fff"
                      />
                      <span style={{ textTransform: "none" }}>GitHub</span>
                    </Button>
                    <Button
                      component="a"
                      href="https://hallmarkio.netlify.app"
                      sx={{
                        bgcolor: "#fff",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <LanguageIcon />
                      <span style={{ textTransform: "none" }}>Website</span>
                    </Button>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sx={{ marginTop: "3rem" }}>
              <Box
                sx={{
                  display: isSmallScreen ? "block" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={portfolioImg}
                  alt=""
                  style={{
                    padding: "1rem",
                    height: "500px",
                    width: isSmallScreen ? "100%" : "50%",
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b6b6b6",
                      width: "100%",
                      textAlign: "center",
                      padding: "1rem",
                    }}
                  >
                    Embark on a journey through my portfolio project, a showcase
                    of my passion and proficiency as a frontend developer.
                    Crafted with precision and creativity, this portfolio
                    reflects my dedication to delivering seamless and visually
                    stunning web interfaces. The portfolio provides a
                    captivating introduction, offering visitors a glimpse into
                    the world of a frontend developer committed to continuous
                    learning. As you navigate through the various sections, from
                    'About' and 'Services' to 'Skills' and 'Contact,' you'll
                    discover a harmonious blend of elegant design and intuitive
                    functionality. Marvel at the 'Projects' section, where each
                    project is a testament to my skills and versatility. Whether
                    it's the dynamic RadBlog project, the immersive LolMart
                    e-commerce store, or the captivating MovieBox with its API
                    integration, each project tells a unique story of innovation
                    and user-centric design. The portfolio isn't just a static
                    display; it's an invitation to connect and collaborate. The
                    'Contact' section provides a seamless way to reach out,
                    emphasizing my commitment to turning ideas into reality.
                    Join me on this digital journey and explore the portfolio to
                    witness the fusion of artistry and technology. Let's connect
                    and bring your digital vision to life!
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      component="a"
                      href="https://github.com/olumayokunayo/portfolio"
                      sx={{
                        bgcolor: "#ffbd38",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <UseAnimations
                        animation={github}
                        size={30}
                        color="#fff"
                      />
                      <span style={{ textTransform: "none" }}>GitHub</span>
                    </Button>
                    <Button
                      component="a"
                      href="https://dejiportfolio.netlify.app"
                      sx={{
                        bgcolor: "#fff",
                        "&:hover": { bgcolor: "#ffbd38" },
                        borderRadius: "20px",
                        color: "#000",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        padding: "0.5rem 1.5rem",
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <LanguageIcon />
                      <span style={{ textTransform: "none" }}>Website</span>
                    </Button>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Typography
            component="a"
            href="https://github.com/olumayokunayo"
            variant="body2"
            sx={{
              color: "#ffbd38",
              textAlign: "center",
              textDecoration: "none",
              margin: isSmallScreen ? "15%" : "40%",
            }}
          >
            See more projects on GitHub
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Project;
