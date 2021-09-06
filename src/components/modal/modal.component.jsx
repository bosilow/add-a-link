import "./modal.styles.scss";

import { useState } from "react";
import { successToast } from "../toast/toast-notify";

const Modal = ({ link, onDelete }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    document.querySelector("body").classList.toggle("active-modal");
  };

  return (
    <>
      <span className="delete-icon" onClick={toggleModal}>
        &#9940;
      </span>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span>Remove Link</span>
              <span className="exit-modal" onClick={toggleModal}>
                &#10005;
              </span>
            </div>
            <span className="modal-question">Do you want to remove:</span>
            <h3 className="modal-link-title">{link.name}</h3>
            <div className="modal-buttons">
              <button
                className="delete-modal-btn"
                onClick={() => {
                  onDelete(link.id);
                  toggleModal();
                  successToast(link.name + " was removed.");
                }}
              >
                OK
              </button>
              <button className="cancel-modal-btn" onClick={toggleModal}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
