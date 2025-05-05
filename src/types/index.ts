export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

//AGREGA LO MISMO QUE MENUITEAM MAS EL QUANTITY
export type OrderItem = MenuItem & {
  quantity: number;
};
