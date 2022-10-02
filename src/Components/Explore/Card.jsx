import React from "react";
import "./Card.css";

const Card = (props) => {
  const data = props.data;

  return (
    <div className="cards">
      <div className="card-item">
        <div className="card-image">
          <img alt="cover" src={data.image} />
        </div>
        <div className="card-info">
          <h2 className="card-title">{data.head}</h2>
          <p className="card-intro">{data.content}</p>
          <a
            style={data.button_disable ===true ? { opacity: 0.3, cursor: "not-allowed"} : {}}
            className="card-more"
            href={data.button_link}
          >
            {data.button_txt}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
