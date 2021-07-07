import { useState } from "react";
import quotesData from "./quotesData";
import Quotes from "./Quotes";
import Buttons from "./Buttons";

const Container = ({randomColor, setRandomColor}) => {
  const [randomNumber, setRandomNumber] = useState (Math.floor (Math.random () * 101) +1);
  return (
    <div className={`container randomColorContainer${randomColor}`} >
      <Quotes quote={quotesData[randomNumber].quote} author={quotesData[randomNumber].author} randomColor={randomColor} />
      <Buttons setRandomNumber={setRandomNumber} quote={quotesData[randomNumber].quote} author={
        // Elimina los espacios en el nombre del autor por 
        (quotesData[randomNumber].author).replace (/ /g, "")
      } randomColor={randomColor} setRandomColor={setRandomColor} />
    </div>
  );
}

export default Container;