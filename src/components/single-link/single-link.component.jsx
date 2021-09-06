import "./single-link.styles.scss";

import Modal from "../modal/modal.component";

import ReactTooltip from "react-tooltip";

const SingleLink = ({ link, onDelete, handleVote }) => {
  return (
    <div className="single-link">
      <div className="points-container">
        <span className="points-counter">{link.points}</span>
        <span className="points-text">POINTS</span>
      </div>
      <div className="link-data">
        <h3 className="link-name">{link.name}</h3>
        <a href={link.url} className="link-url" data-tip="Click to follow link">
          ({link.url})
        </a>
        <ReactTooltip />
        <div className="vote-btns">
          <button className="upvote-btn" onClick={() => handleVote(link.id, 1)}>
            &#129129; Up Vote
          </button>
          <button
            className="downvote-btn"
            onClick={() => handleVote(link.id, -1)}
          >
            &#129131; Down Vote
          </button>
        </div>
      </div>
      <Modal link={link} onDelete={onDelete} />
    </div>
  );
};

export default SingleLink;
