import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Homepage.css";

const Homepage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      const loadedData = [];

      for (let key in data) {
        loadedData.push({
          id: data[key].id,
          name: data[key].name,
          username: data[key].username,
          website: data[key].website,
          email: data[key].email,
          company: data[key].company.name,
          phone: data[key].phone,
          address: data[key].address,
        });
      }
      setUserData(loadedData);
    };

    getUserData();
  }, []);

  return (
    <div className="homepage">
      <div className="card-list">
        {userData.map((data) => (
            <Card userData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
