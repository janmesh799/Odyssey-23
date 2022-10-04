import React from "react";
import cover from "../../images/cover.jpg";
import iconImage from "../../images/iconImage.png";
import "./Home.css";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        overflow: "hidden",
        position: "relative",
        height: "100vh",
        minHeight: "500px",
        maxHeight: "650px",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          zIndex: 10,
          top: "20%",
          paddingRight: "5%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <img
          style={{
            height: "15em",
            float: "left",
            width: "auto",
            verticalAlign: "middle",
          }}
          src={iconImage}
          alt="icon"
        />
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: "3%" }}
        >
          <h1
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: "5em",
              letterSpacing: "0.05em",
              lineHeight: ".9em",
              margin: "1rem",
              fontFamily: "'Lato',sans-sarif",
            }}
          >
            Odyssey
          </h1>
          <h2
            style={{
              color: "#a0cfee",
              fontWeight: "500",
              fontSize: "2.25em",
              marginBottom: "15px",
              textAlign: "left",
              margin: " 2px",
              marginLeft: "1rem",
              fontFamily: "'Lato',sans-sarif",
            }}
          >
            {" "}
            IIIT Delhi
          </h2>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "rgba(0, 0, 0, 0.7)",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          zIndex: "10",
          bottom: "70px",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            width: "35px",
            height: "35px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div className="down-arrow"></div>
        </span>
      </div>
    </div>
  );
};

export default Home;
