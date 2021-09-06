import "./header.styles.scss";

const Header = ({ author, title }) => (
  <header className="header">
    <div className="author">{author}</div>
    <div className="title">{title}</div>
  </header>
);

export default Header;
