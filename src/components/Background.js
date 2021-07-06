import Container from "./Container";
import { useState } from "react";
import "./style.css";
import "./randomColor.css";

const Background = () => {
  const [randomColor, setRandomColor] = useState (Math.floor (Math.random () * 10) +1);
  return (
    <div className={`background randomColorBackground${randomColor}`}>
      <Container randomColor={randomColor} setRandomColor={setRandomColor} />
    </div>
  );
}

export default Background;