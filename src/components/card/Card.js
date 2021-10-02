import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoreDetail from "../../pages/MoreDetail";
import "./Card.css";
import profileImg from '../../images/profile.jpg';

const Card = (props) => {
  const { name, username, website } = props.userData;

  return (
    <div className="card">
      <img src={profileImg} alt="Profile"></img>
      <h3 className="name">{name}</h3>
      <p className="username">{`@${username}`}</p>
      <a href={website} className="website">
        {`http://${website}`}
      </a>
      <Link to="/moredetail">
        <MoreDetail />
      </Link>
    </div>
  );
};

export default Card;
