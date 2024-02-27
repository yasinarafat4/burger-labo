import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import homeAbout from "../../../public/home-about.jpg";
import SectionTitle from "../titles/SectionTitle";

const HomeAbout = () => {
  return (
    <section className="mt-20 lg:mt-14 text-center">
      {/* Section Title */}
      <SectionTitle subHeading={"Our Story"} heading={"About Us"} />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div>
          <Image
            src={homeAbout}
            alt="About Us"
            className="w-11/12 mx-auto rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="text-start text-gray-500 p-4">
          <p className=" dark:text-slate-400 mb-4 lg:text-sm xl:text-base">
            We are passionate about delivering the ultimate burger experience to
            you. Our mission is to serve mouthwatering burgers made with
            high-quality ingredients and exceptional care.
          </p>
          <p className=" dark:text-slate-400 mb-4 lg:text-sm xl:text-base lg:hidden xl:block">
            We believe in swift and reliable delivery to get your burgers to you
            as fresh as possible. If you have any questions or need assistance,
            our 24/7 customer support team is here to ensure your burger
            cravings are satisfied.
          </p>
          <p className="dark:text-slate-400 mb-4 lg:text-sm xl:text-base">
            Our commitment to sustainability is at the core of our operations.
            We strive to minimize our environmental footprint by sourcing
            ingredients responsibly, reducing waste, and implementing
            eco-friendly packaging solutions. Enjoy your burger guilt-free,
            knowing that it&apos;s not only delicious but also contributing to a
            healthier planet.
          </p>
          <Link href={"/about"}>
            <button className="btn btn-outline text-base hover:bg-primary w-3/6 md:w-2/6 lg:w-2/5 flex items-center justify-center">
              <span>More About Us</span> <BsArrowUpRight className="text-primary hover:text-white text-base font-bold" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
