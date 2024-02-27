import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartBtn = () => {
  return (
    <button
      className="btn btn-primary bg-primary w-8/12 md:w-4/12 mt-4"
    >
      <MdOutlineAddShoppingCart />
      {"Add To Cart"}
    </button>
  );
};

export default AddToCartBtn;
