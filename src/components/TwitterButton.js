
const TwitterButton = ({quote, author}) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}&hashtags=${author}`; 
  return (
    <div>
      <button>
        <a href = {twitterUrl}> Share with Twitter</a>
      </button>
    </div>
  );
}

export default TwitterButton;