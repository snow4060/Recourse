import { Link } from "react-router-dom";
import "./styles/Header.css";
import useModal from "../Modal/hooks/useModal";
import { ReactNode } from "react";
import CredentialsBox from "../CredentialsBox/CredentialsBox";

// TODO: how can i call a react hook from a callback function

function Header() {
  const { setOpen, setModalContent } = useModal();
  const handleClick = (modalContent: ReactNode) => {
    setModalContent(modalContent);
    setOpen(true);
  };

  return (
    <nav className="navHeader">
      <Link to="/" className="navHeaderLeft">
        Recourse
      </Link>
      <div className="navHeaderCenter">
        <Link to="/classListing">Class Listing</Link>
        <Link to="/classPlanner">Class Planner</Link>
        <Link to="/classSearch">Class Search</Link>
      </div>
      <div className="navHeaderRight">
        <svg className="credentialsIcon">
          <path
            className="icon"
            onClick={() => handleClick(<CredentialsBox />)}
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58z"
          ></path>
        </svg>
      </div>
    </nav>
  );
}

export default Header;
