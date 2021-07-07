const NextQuoteButton = ({setRandomNumber, randomColor, setRandomColor }) => {
  return (
    <div>
      <button className={`nextQuoteButton randomColorButtons${randomColor}`} onClick={
        () => {
          setRandomNumber (Math.floor (Math.random () * 101) +1);
          setRandomColor (Math.floor (Math.random () * 10) +1);
        }
      }>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default NextQuoteButton