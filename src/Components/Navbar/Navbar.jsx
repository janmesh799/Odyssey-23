import React from "react";
import { Container } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import iconImage from "../../images/iconImage.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Container
        maxWidth="false"
        sx={{
          margin: "0px",
          padding: "0px !important",
          backgroundImage: "linear-gradient(to bottom right, #222222, #555555)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button>
          <img style={{ height: "60px" }} src={iconImage} alt="" />
        </Button>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "0px",
            justifyContent: "flex-end",
          }}
        >
          <Button sx={{ color: "white" }}>
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Home
            </a>
          </Button>
          <Button sx={{ color: "white" }}>
            {" "}
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              OT
            </a>
          </Button>
          <FormControl
            variant="filled"
            sx={{ width: "10rem", margin: "0rem 1rem" }}
          >
            <InputLabel id="events">
              <Button sx={{ color: "white" }}>Events</Button>
            </InputLabel>
            <Select labelId="events" id="events_menu" label="events">
              <MenuItem>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  {" "}
                  Google
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  {" "}
                  Google
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  {" "}
                  Google
                </a>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="filled"
            sx={{ width: "10rem", margin: "0rem 1rem" }}
          >
            <InputLabel id="Sponsors">
              <Button sx={{ color: "white" }}>Sponsors</Button>
            </InputLabel>
            <Select labelId="Sponsors" id="Sponsors_menu" label="Sponsors">
              <MenuItem>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  {" "}
                  Google
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  {" "}
                  Google
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/"
                >
                  {" "}
                  Google
                </a>
              </MenuItem>
            </Select>
          </FormControl>
        </Container>
      </Container>
    </div>
  );
};

export default Navbar;
