import React from "react";
// import { Container } from "@mui/system";
import iconImage from "../../images/iconImage.png";
// import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Footer.css";
// import FooterLink from "./FooterLink";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <footer className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <img
            alt="logo"
            src={iconImage}
            style={{
              height: "150px",
              marginRight: "auto !important",
              marginBottom: "15px",
              display: "block !important",
            }}
          />
        </div>
        <div className="footer-items brdr-left">
          <h3 className="footer-heading">Contact us</h3>
          <ul>
            <li>
              <a
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                href="/"
              >
                <div style={{margin:"0em 1em 0em 0em"}}>
                  <LocationOnIcon />
                </div>
                IIIT Delhi
              </a>
            </li>
            <li>
              <a
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                href="mailto:odyssey@iiitd.ac.in"
              >
                <div style={{margin:"0em 1em 0em 0em"}}>
                  <LocalPostOfficeIcon />
                </div>
                odyssey@iiitd.ac.in
              </a>
            </li>
            <li>
              <a
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                href="https://www.instagram.com/iiitdodyssey/"
              >
                <div style={{margin:"0em 1em 0em 0em"}}>
                  <InstagramIcon />
                </div>
                insta.com/odyssey
              </a>
            </li>
          </ul>
        </div>
        <div className="scroll-top-div">
          <div className="scroll-top-button" onClick={scrollToTop}>
            Scroll to top
            <div style={{ marginLeft: "0.5rem", marginTop: "0.25rem" }}>
              <ArrowUpwardIcon />
            </div>
            {/* <i
              className="fa fa-long-arrow-up"
              aria-hidden="true"
              style={{ marginLeft: "10px" }}
            ></i> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span
          style={{
            color: "dadada",
            fontSize: "1.2em",
            marginBottom: "7px",
            display: "block",
          }}
        >
          Made with ♥ by
          <a
            href="https://github.com/naman-ng"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#fafafa",
              textDecorationColor: "#dadada",
              textDecoration: "underline",
            }}
          >
            Naman Garg
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
