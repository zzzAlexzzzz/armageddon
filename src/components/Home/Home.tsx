import planeta from "../../asets/img/planetaZemliaKosmos 1.png";
import { Asteroids } from "../Asteroids/Asteroids";
import { CartBlock } from "../CartBlock/CartBlock";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAsteroid } from "../../Redux/Slice/AsteroidSlice";

import "./Home.scss";

// const src = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-23&end_date=2023-09-23&api_key=VrfULl1k8H3g4oPHMPAcJ8mKBCa25c4xAbMqqICI`;

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.asteroid.items);

  useEffect(() => {
    dispatch<any>(fetchAsteroid());
  }, [dispatch]);

  // const [item, setItem] = useState<any>([]);

  // useEffect(() => {
  //   axios.get(src).then((data) => {
  //     setItem(data.data.near_earth_objects["2023-09-13"]);
  //   });
  // }, []);

  console.log(items);

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
            {items[0].map((item: any) => (
              <Asteroids
                key={item}
                id={item.id}
                name={item.name}
                distance={item.close_approach_data[0].miss_distance.kilometers}
                diameter={item.estimated_diameter.meters.estimated_diameter_min}
                dangerous={item.is_potentially_hazardous_asteroid}
                dateFull={item.close_approach_data[0].close_approach_date_full}
              />
            ))}
          </div>
          <CartBlock />
        </div>
      </div>
    </>
  );
};

export default Home;
