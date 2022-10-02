import React from "react";
import { Container } from "@mui/system";
import iconImage from "../../images/iconImage.png";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Footer.css";
import FooterLink from "./FooterLink";

const Footer = () => {
  const footerlinks = [
    { key: 1, icon: <LocationOnIcon />, displayText: "IIIT Delhi", link: "/" },
    {
      key: 2,
      icon: <LocalPostOfficeIcon />,
      displayText: "odyssey@iiitd.ac.in",
      link: "/",
    },
    {
      key: 3,
      icon: <InstagramIcon />,
      displayText: "insta.com/odyssey",
      link: "/",
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <Container
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        padding: "2em",
      }}
      maxWidth="false"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRight: "2px dashed #333333",
        }}
      >
        <img style={{ width: "30%" }} src={iconImage} alt="icon" />
      </Container>
      <Container
        sx={{ display: "flex", flexDirection: "row", marginLeft: "-2rem" }}
      >
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" className="footer-heading">
            Contact us
          </Typography>
          <Container sx={{ marginTop: "3rem", marginLeft: "-2rem" }}>
            {footerlinks.map((element) => {
              return <FooterLink key={element.key} data={element} />;
            })}
          </Container>
        </Container>
        <Container className="scroll-to-top">
          <Typography
            onClick={scrollToTop}
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Scroll to top
            <ArrowUpwardIcon />
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
