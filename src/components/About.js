import React from "react";
import Links from "./Links";
function About(props) {
  let bioContent = null;


  if (props.bio && props.bio.trim() !== "") {
    bioContent = <p>{props.bio}</p>;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioContent}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github} />
    </div>
  );
}

export default About;
