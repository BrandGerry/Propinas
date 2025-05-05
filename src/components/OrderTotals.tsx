import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subTotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotal * tip, [tip, order]);

  const totalAmout = useMemo(() => tipAmount + subTotal, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a Pagar: {""}
          <span className="font-bold">{formatCurrency(subTotal)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmout)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-40"
        disabled={totalAmout === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};
