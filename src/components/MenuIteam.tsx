import { MenuItem } from "../types";

type MenuIteamProps = {
  iteam: MenuItem;
  addIteam: (iteam: MenuItem) => void;
};
export const MenuIteam = ({ iteam, addIteam }: MenuIteamProps) => {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-100 w-full p-3 flex justify-between"
      onClick={() => addIteam(iteam)}
    >
      <p>{iteam.name}</p>
      <p className="font-black">${iteam.price}</p>
    </button>
  );
};
