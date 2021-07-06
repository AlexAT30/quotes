import { useState } from "react";
import quotesData from "./quotesData";
import Quotes from "./Quotes"
import Button from "./Button"
import TwitterButton from "./TwitterButton"

const Container = () => {
  const [randomNumber, setRandomNumber] = useState (Math.floor (Math.random () * 103) +1);
  return (
    <div>
      <Quotes quote = {quotesData[randomNumber].quote} author = {quotesData[randomNumber].author}/>
      <Button setRandomNumber = {setRandomNumber}/>
      <TwitterButton quote = {quotesData[randomNumber].quote} author = {
        // Elimina los espacios en el nombre del autor por 
        (quotesData[randomNumber].author).replace (/ /g, "")
      }/>

    </div>
  );
}

export default Container;