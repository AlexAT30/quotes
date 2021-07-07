import {MdKeyboardArrowRight} from "react-icons/md"

const NextQuoteButton = ({setRandomNumber, randomColor, setRandomColor }) => {
  return (
    <div>
      <button className={`nextQuoteButton randomColorButtons${randomColor}`} onClick={
        () => {
          setRandomNumber (Math.floor (Math.random () * 103) +1);
          setRandomColor (Math.floor (Math.random () * 10) +1);
        }
      }>
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}

export default NextQuoteButton