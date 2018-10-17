import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./styles.css";

const url =
  "https://media.rockstargames.com/rockstargames-newsite/img/global/downloads/wallpapers/games/rdr2_officialart_3840x2160.jpg";
const title = "Outlaws For Life";
const text = "You're playing a dangerous game!";

function Poster({ image, title, text }) {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={url} alt="Red Dead" />
      </div>
      <div className="posterTitle"> {title} </div>
      <div className="posterText"> {text} </div>
    </div>
  );
}

Poster.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

ReactDOM.render(
  <Poster image={url} title={title} text={text} />,
  document.getElementById("root")
);
