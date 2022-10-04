import React from "react";
import { Container, Typography } from "@mui/material";
import star_perf from "../../images/star_perf.jpg";
import spons from "../../images/spons.jpg";
import events from "../../images/events.jpg";
import Card from "./Card";
const Explore = () => {
  const card_data = [
    {
      key: 1,
      image: star_perf,
      head: "Star Perfomer",
      content:
        "Our biggest crowd-puller, Nirvana Night has seen stars like Jubin Nautiyal, Prateek Kuhad, Gajendra Verma, Harrdy Sandhu, Zakir Khan, Nina Suerte, Euphoria and The Local Train in the past three years.",
      button_txt: "Biggest Stars",
      button_link: "/",
      button_disable: false,
    },
    {
      key: 2,
      image: events,
      head: "Events",
      content:
        "Mungfali mein ab daana nahi, Trust karne ka ab zamana nahi Agar FOMO nahi chahiye toh, Odyssey miss karne ka plan banana nahi",
      button_txt: "Comming Soon",
      button_link: "",
      button_disable: true,
    },
    {
      key: 3,
      image: spons,
      head: "Sponsors",
      content:
        "Malik ki gadi, driver ka paseena Organizing committee se nhi milna?",
      button_txt: "MEET ORGANIZING COMMITTEE  ",
      button_link: "/",
      button_disable: false,
    },
  ];
  return (
    <div>
      <Container sx={{ marginTop: "5rem" }} maxWidth="false">
        <Container maxWidth="false" sx={{ margin: "2rem",display:"flex",justifyContent:"center" }}>
          <Typography className="heading" variant="h4">
            Explore
          </Typography>
        </Container>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {card_data.map((card) => {
            return <Card key={card.key} data={card} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Explore;
