import "./add-link-form.styles.scss";

import { useState } from "react";
import { successToast } from "../toast/toast-notify";

const AddLinkForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, url, points: 0 });
    successToast(name + " was added.");

    setName("");
    setUrl("");
  };

  return (
    <form className="add-link-form" onSubmit={onSubmit}>
      <div className="form">
        <span className="form-title">Add New Link</span>
        <div className="form-control">
          <label className="form-label">Link Name:</label>
          <input
            className="form-input"
            type="text"
            placeholder="e.g. Alphabet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label">Link Url:</label>
          <input
            className="form-input"
            type="url"
            placeholder="e.g. http://abc.xyz"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="add-btn">
        <input className="btn-add-link" type="submit" value="ADD" />
      </div>
    </form>
  );
};

export default AddLinkForm;
