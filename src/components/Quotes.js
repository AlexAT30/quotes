const Quotes = ({quote, author, randomColor}) => {
  return (
    <div className="quotes">
      <p className="quote">
        {quote}
      </p>
      <p className={`author randomColorAuthor${randomColor}`} >
        - {author}
      </p>
    </div>
  );
}

export default Quotes;