import SingleLink from "../single-link/single-link.component";

const LinkList = ({ links, onDelete, handleVote }) => {
  return (
    <div className="link-list">
      {links.map((link) => (
        <SingleLink
          key={link.id}
          link={link}
          onDelete={onDelete}
          handleVote={handleVote}
        />
      ))}
    </div>
  );
};

export default LinkList;
