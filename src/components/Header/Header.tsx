import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <>
      <Link to="/">
        <div className="header">
          <div className="container">
            <div className="header__title">
              <h2>ARMAGEDDON 2023</h2>
              <h3>ООО “Команда им. Б. Уиллиса”.</h3>
              <h3>Взрываем астероиды с 1998 года.</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
