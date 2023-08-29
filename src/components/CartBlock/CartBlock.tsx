import React from "react";
import "./CartBlock.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

export const CartBlock: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <div>
        <div className="cart">
          <div className="cart__item">
            <h3>Корзина</h3>
            <div className="cart__prise">{items.length} астероида</div>
          </div>

          <Link to="/Cart">
            <button className="button__cart">
              <div>Отправить</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
