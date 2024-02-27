import PageTitle from "@/components/titles/PageTitle";
import getBurgers from "../../utils/getBurgers";
import SingelBurgerCard from "./SingelBurgerCard";

export const revalidate = 0;

const MenuPage = async ({ searchParams: { categoryId } }) => {
    const burgers = await getBurgers(categoryId);

  return (
    <div className="mt-10">
         {/* Title */}
      <PageTitle heading={"All Burgers"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {burgers.map((burger) => (
          <SingelBurgerCard burger={burger} key={burger._id} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
