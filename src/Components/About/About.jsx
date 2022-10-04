import React from "react";
import { Container, Typography } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container sx={{marginBottom:"60px"}} maxWidth="false">
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0 30px 0",
          }}
        >
          <Typography className="heading" variant="h4">
            About Us
          </Typography>
        </Container>
        <Container>
          <Typography
            sx={{ fontFamily: "'Lato',sans-sarif", fontSize: "large" }}
          >
            Odyssey is the annual cultural fest of IIITD. It's a journey that
            more than 450 people embark on to cater to an audience larger than
            30,000 people. Not just that, it's an opportunity to make memories
            that you cherish and make bonds that last.
          </Typography>
        </Container>
      </Container>
      <hr style={{opacity:"0.5"}} />
    </div>
  );
};

export default About;
