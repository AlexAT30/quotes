const Quotes = ({quote, author, randomColor}) => {
  return (
    <div className="quotes">
      <p className="quote">
        <i className={`fas fa-quote-right quoteIcon randomColorAuthor${randomColor}`}></i>
        {quote}
      </p>
      <p className={`author randomColorAuthor${randomColor}`} >
        - {author}
      </p>
    </div>
  );
}

export default Quotes;