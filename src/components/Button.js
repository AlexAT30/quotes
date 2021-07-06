
const Button = ({setRandomNumber}) => {
  return (
    <div>
      <button onClick = {
        () => {
          setRandomNumber (Math.floor (Math.random () * 103) +1);
        }
      }>
        Next quote
      </button>
    </div>
  );
}

export default Button