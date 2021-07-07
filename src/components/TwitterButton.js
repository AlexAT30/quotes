const TwitterButton = ({quote, author, randomColor}) => {
  // Link para compartir en twitter la cita con su autor como hashtag
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}&hashtags=${author}`;
  return (
    <div>
      <button className={`twitterButton randomColorButtons${randomColor}`} >
        <a className={`randomColorTwitter${randomColor}`} href={twitterUrl}>
          <i class="fab fa-twitter"></i>
        </a>
      </button>
    </div>
  );
}

export default TwitterButton;