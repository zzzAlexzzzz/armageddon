import React from "react";
import planeta from "../../asets/img/planetaZemliaKosmos 1.png";
import { Asteroids } from "../Asteroids/Asteroids";
import { CartBlock } from "../CartBlock/CartBlock";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Home.scss";

const src = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-01&end_date=2023-09-01&api_key=VrfULl1k8H3g4oPHMPAcJ8mKBCa25c4xAbMqqICI`;

const Home = () => {
  const [item, setItem] = useState<any>([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setItem(data.data.near_earth_objects["2023-09-01"]);
    });
  }, []);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="planeta_zemlia">
            <img src={planeta} alt="planeta_zemlia_kosmos" />
          </div>
          <div className="content__list">
            <div className="content__top">
              <h1>Ближайшие подлёты астероидов</h1>
              <div className="content__distance">
                <span className="content__distance-km">в километрах</span>
                <div className="content__delimiter">|</div>
                <span className="content__distance-moon">в лунных орбитах</span>
              </div>
            </div>
            {item.map((obj: any) => {
              return (
                <Asteroids
                  key={obj.id}
                  id={obj.id}
                  dateFull={obj.close_approach_data[0].close_approach_date_full}
                  name={obj.name}
                  distance={obj.close_approach_data[0].miss_distance.kilometers}
                  diameter={
                    obj.estimated_diameter.meters.estimated_diameter_min
                  }
                  dangerous={obj.is_potentially_hazardous_asteroid}
                />
              );
            })}
          </div>
          <CartBlock />
        </div>
      </div>
    </>
  );
};

export default Home;
