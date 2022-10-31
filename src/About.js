import React from "react";
import { useOutletContext } from "react-router-dom";

const About = (context) => {
  const ans = useOutletContext();

  console.log(ans, "About");
  return <div>About</div>;
};

export default About;
