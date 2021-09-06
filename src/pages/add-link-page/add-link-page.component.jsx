import "./add-link-page.styles.scss";

import { Link } from "react-router-dom";

import AddLinkForm from "../../components/add-link-form/add-link-form.component";
import { ToastNotification } from "../../components/toast/toast-notify";

const AddLinkPage = ({ onAdd }) => (
  <div className="add-link-page">
    <ToastNotification />
    <Link to="/" className="return-btn">
      &#11013; Return to List
    </Link>
    <AddLinkForm onAdd={onAdd} />
  </div>
);

export default AddLinkPage;
