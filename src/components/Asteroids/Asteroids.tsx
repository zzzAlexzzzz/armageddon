import React from "react";
import asteroid from "../../asets/img/pngegg 1.png";
import "./Asteroids.scss";
import { useDispatch } from "react-redux";
import { addAsteroid } from "../../Redux/Slice/CartSlice";

interface AsteroidsProps {
  id: number;
  name: string;
  distance: string;
  diameter: number;
  dangerous: boolean;
  dateFull: string;
}

export const Asteroids = ({
  id,
  name,
  distance,
  diameter,
  dangerous,
  dateFull,
}: AsteroidsProps) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      name,
      distance,
      diameter,
      dangerous,
      dateFull,
    };
    dispatch(addAsteroid(item));
  };

  return (
    <div>
      <div className="content__list__asteroids">
        <h2>{dateFull}</h2>
        <div className="content__asteroid">
          <div className="asteroid__distance">
            <div className="asteroid__distance-km">{distance}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="6"
              viewBox="0 0 96 6"
              fill="none"
            >
              <path
                d="M0 3L5 5.88675L5 0.113249L0 3ZM96 3.00001L91 0.113257L91 5.88676L96 3.00001ZM4.5 3.5L91.5 3.50001L91.5 2.50001L4.5 2.5L4.5 3.5Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <div className="asteroid-img">
            <img src={asteroid} alt="asteroid" />
          </div>
          <div className="asteroid__dimensions">
            <h3>{name}</h3>
            <h4>Ø {diameter} м</h4>
          </div>
        </div>
        <div className="asteroid__info">
          <button onClick={onClickAdd} className="asteroid-cart">
            <h2>ЗАКАЗАТЬ</h2>
          </button>
          <div className="dangerous">
            {dangerous === true ? "⚠ Опасен" : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
