import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
 

const NextQuoteButton = ({setRandomNumber, randomColor, setRandomColor }) => {
  return (
    <div>
      <button className={`nextQuoteButton randomColorButtons${randomColor}`} onClick={
        () => {
          setRandomNumber (Math.floor (Math.random () * 103) +1);
          setRandomColor (Math.floor (Math.random () * 10) +1);
        }
      }>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default NextQuoteButton