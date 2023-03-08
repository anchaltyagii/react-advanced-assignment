import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MyCard from "./Components/Card/Card";

function App() {
  const [cardData, setCardData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setCardData(response.data);
      setLoader(false);
    });
  }, []);
  return (
    <>
      {!loader ? (
        <div className="row" style={{margin: "0px"}}>
          {cardData.map((el, key) => {
            return (
              <MyCard
                id={key}
                username={el.username}
                name={el.name}
                email={el.email}
                phone={el.phone}
                company={el.company.name}
                website={el.website}
                address={`${el.address.street}, ${el.address.suite}, ${el.address.city}, ${el.address.zipcode}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      )}
    </>
  );
}

export default App;
