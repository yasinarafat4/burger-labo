import Image from "next/image";
import burger from "../../../public/burger-item.png";

const MenuItemsCard = () => {
  return (
    <div className="bg-gray-200 hover:bg-white hover:shadow-lg dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-900  dark:hover:text-slate-300 hover:shadow-black/25 duration-300 px-2 py-4 rounded-lg text-center">
      <Image className="w-5/12 mx-auto" src={burger} alt={"burger"} />
      <h4 className="font-semibold text-xl my-3">Lorem, ipsum.</h4>
      <p className="text-gray-500 dark:text-slate-400 text-sm w-3/4 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
        accusamus?
      </p>
      <button className="m-4 w-11/12 lg:w-10/12 mx-auto bg-primary text-white rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItemsCard;
