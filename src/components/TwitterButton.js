import {AiOutlineTwitter} from "react-icons/ai"

const TwitterButton = ({quote, author, randomColor}) => {
  // Link para compartir en twitter la cita con su autor como hashtag
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}&hashtags=${author}`;
  return (
    <div>
      <button className={`twitterButton randomColorButtons${randomColor}`} >
        <a className={`randomColorTwitter${randomColor}`} href={twitterUrl}>
          <AiOutlineTwitter />
        </a>
      </button>
    </div>
  );
}

export default TwitterButton;