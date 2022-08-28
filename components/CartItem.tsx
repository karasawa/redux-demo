import { FC } from "react";
import type { CartItem as Props } from "../features/cart/CartSlice";
import { MinusIcon, PlusIcon } from "./HeroIcons";

export const CartItem: FC<Props> = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn">削除</button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};
