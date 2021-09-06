import Header from "./components/header/header.component";
import SubmitLinkContainer from "./components/submit-link-container/submit-link-container.component";
import LinkList from "./components/link-list/link-list.component";
import Sorter from "./components/sorter/sorter.component";
import Pagination from "./components/pagination/pagination.component";
import { ToastNotification } from "./components/toast/toast-notify";

import AddLinkPage from "./pages/add-link-page/add-link-page.component";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [links, setLinks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage] = useState(5);

  // Get current links
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = links.slice(indexOfFirstLink, indexOfLastLink);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Local Storage
  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      setLinks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(links));
  });

  // Add Link
  const addLink = (link) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newLink = { id, ...link };
    setLinks([newLink, ...links]);
  };

  // Delete Link
  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  // Vote Link
  const handleVote = (id, increaseCount) => {
    links.forEach((link) => {
      if (id === link.id) {
        link.points = link.points + increaseCount;
      }
    });
    setLinks([...links]);
  };

  // Sort Links
  const sortLinks = (e) => {
    const newLinks = [...links];
    if (e.target.value === "mostVoted") {
      newLinks.sort((a, b) => b.points - a.points);
      setLinks(newLinks);
    } else if (e.target.value === "lessVoted") {
      newLinks.sort((a, b) => a.points - b.points);
      setLinks(newLinks);
    }
  };

  return (
    <Router>
      <div className="App">
        <ToastNotification />
        <Header
          author="bosiljkostojanovic"
          title={
            <>
              <b>Link</b>VOTE Challenge
            </>
          }
        />
        <hr className="horizontal-break" />
        <Route
          exact
          path="/"
          render={() => (
            <div className="homepage-container">
              <SubmitLinkContainer symbol="&#10010;" text="SUBMIT A LINK" />
              <Sorter sortLinks={sortLinks} />

              {links.length > 0 ? (
                <LinkList
                  links={currentLinks}
                  onDelete={deleteLink}
                  handleVote={handleVote}
                />
              ) : (
                "No Links To Show"
              )}
              {links.length >= 5 ? (
                <Pagination
                  linksPerPage={linksPerPage}
                  totalLinks={links.length}
                  paginate={paginate}
                />
              ) : (
                ""
              )}
            </div>
          )}
        />
        <Route
          path="/newlink"
          render={(props) => <AddLinkPage {...props} onAdd={addLink} />}
        />
      </div>
    </Router>
  );
};

export default App;
