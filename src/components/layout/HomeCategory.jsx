import getCategories from "@/utils/getCategories";
import Image from "next/image";
import saladImage1 from "../../../public/sallad1.png";
import saladImage2 from "../../../public/sallad2.png";
import SingleCategoryCard from "../cards/SingleCategoryCard";
import SectionTitle from "../titles/SectionTitle";


const HomeCategory = async () => {
  const categories = await getCategories();

  return (
    <section className="mt-20 lg:mt-14">
      {/* Salad Image */}
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10 xl:z-50">
          <Image src={saladImage1} width={109} height={189} alt={"sallad"} />
        </div>
      </div>
      {/* Section Title */}
      <SectionTitle subHeading={"Check Out"} heading={"Our Top Categories"} />
      {/* Menu Items Card */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-2 mb-5">
        {categories.map((category) => (
          <SingleCategoryCard category={category} key={category._id} />
        ))}
      </div>
      {/* Salad Image */}
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -top-[100px] right-0 -z-10 xl:z-50">
          <Image src={saladImage2} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
