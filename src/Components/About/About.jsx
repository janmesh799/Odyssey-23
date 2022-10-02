import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Container maxWidth="false">
        <Container maxWidth="false" sx={{ margin: "2rem" }}>
          <Typography sx={{ textAlign: "center" }} variant="h4">
            About Us
          </Typography>
          <hr />
        </Container>
        <Container>
          <Typography>
            Odyssey is the annual cultural fest of IIITD. It's a journey that
            more than 450 people embark on to cater to an audience larger than
            30,000 people. Not just that, it's an opportunity to make memories
            that you cherish and make bonds that last.
          </Typography>
        </Container>
      </Container>
    </div>
  );
};

export default About;
