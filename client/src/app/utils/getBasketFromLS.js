import { calcTotalPrice } from "./calkTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("basket");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice
  };
};
