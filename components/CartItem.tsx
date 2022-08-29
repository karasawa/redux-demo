import { FC } from "react";
import type { CartItem as Props } from "../features/cart/CartSlice";
import { MinusIcon, PlusIcon } from "./HeroIcons";
import { removeItem, increase, decrease } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

export const CartItem: FC<Props> = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => dispatch(decrease(id))}>
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};
