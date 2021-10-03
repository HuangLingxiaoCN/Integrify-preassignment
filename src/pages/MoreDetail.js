import { useLocation } from "react-router";
import "./MoreDetail.css";

const MoreDetail = () => {
  const location = useLocation();
  const data = location.state.userData;

  return (
    <div className="moredetail-container">
      <ul className="detail-list">
        <li>- name: {data.name}</li>
        <li>- username: {data.username}</li>
        <li>- email: {data.email}</li>
        <li>- phone: {data.phone}</li>
        <li>- company: {data.company}</li>
        <li>- website: {data.website}</li>
        <li>
          - address:
          <ul className="address-list">
            <li>street: {data.address.street}</li>
            <li>suite: {data.address.suite}</li>
            <li>city: {data.address.city}</li>
            <li>zipcode: {data.address.zipcode}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MoreDetail;
