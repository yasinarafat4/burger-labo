import Image from "next/image";
import burger from "../../../public/burger-item.png";

const MenuItemsCard = () => {
  return (
    <div className="bg-gray-200 px-2 py-4 rounded-lg text-center">
      <Image className="w-9/12 mx-auto" src={burger} alt={"burger"} />
      <h4 className="font-semibold text-xl my-3">Lorem, ipsum.</h4>
      <p className="text-gray-500 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
        accusamus?
      </p>
      <button className="m-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItemsCard;
