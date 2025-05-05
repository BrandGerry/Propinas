import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addIteam = (iteam: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === iteam.id);
    if (itemExist) {
      //MAPEA LA LISTA TOMA EL QUE ES IGUAL Y LE SUMA 1 Y ACTUALIZA EL STATE
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === iteam.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...iteam, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeIteam = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addIteam,
    removeIteam,
    placeOrder,
  };
};
