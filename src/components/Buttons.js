import NextQuoteButton from "./NextQuoteButton";
import TwitterButton from "./TwitterButton";

const Buttons = ({randomColor, setRandomColor, setRandomNumber, quote, author}) => {
  return (
    <div className="buttons" >
      <TwitterButton quote={quote} author={author} randomColor={randomColor} />
      <NextQuoteButton setRandomNumber={setRandomNumber} randomColor={randomColor} setRandomColor={setRandomColor} />
    </div>
  );
}

export default Buttons;