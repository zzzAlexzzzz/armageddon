import React from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearItem } from "../../Redux/Slice/CartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);

  const onClickClear = () => {
    if (window.confirm("Ты действительно хочешь их уничтожить?")) {
      dispatch(clearItem());
    }
  };

  return (
    <div>
      <h2>Заказ отправлен!</h2>

      {items.map((item: any) => (
        <CartItem key={item} {...item} />
      ))}
      <div className="cart__button">
        <button onClick={onClickClear} className="asteroid-destroy">
          <h2>Уничтожить все</h2>
        </button>
      </div>
    </div>
  );
};
