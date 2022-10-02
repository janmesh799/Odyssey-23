import { Container, Typography } from "@mui/material";
import React from "react";
import "./FooterLink.css";

const FooterLink = (props) => {
  const data = props.data;
  return (
    <Container
      sx={{
        borderBottom: "1px dotted #333333",
        marginBottom: "1rem",
        padding: "0rem !important",
      }}
    >
      <a className="footer-link" href={data.link}>
        <div style={{ marginRight: "1rem" }}>{data.icon}</div>
        <Typography className="footer-link-text">{data.displayText}</Typography>
      </a>
    </Container>
  );
};

export default FooterLink;
