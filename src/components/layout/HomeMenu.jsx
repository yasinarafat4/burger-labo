import Image from "next/image";
import saladImage1 from "../../../public/sallad1.png";
import saladImage2 from "../../../public/sallad2.png";
import MenuItemsCard from "../menu/MenuItemsCard";
import SectionTitle from "../titles/SectionTitle";

const HomeMenu = () => {
  return (
    <section className="mt-20 lg:mt-14">
      {/* Salad Image */}
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left z-50">
          <Image src={saladImage1} width={109} height={189} alt={"sallad"} />
        </div>
      </div>
      {/* Section Title */}
      <SectionTitle subHeading={"Check Out"} heading={"Our Top Picks"} />
      {/* Menu Items Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14 gap-4 mx-4">
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
        <MenuItemsCard />
      </div>
       {/* Salad Image */}
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -top-[100px] right-0 z-50">
          <Image src={saladImage2} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
