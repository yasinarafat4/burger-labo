import PageTitle from "@/components/titles/PageTitle";
import Image from "next/image";
import aboutImg from "../../../public/about.png";

const AboutPage = () => {
  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900 dark:text-white">
      {/* Title */}
      <PageTitle heading={"About Us"} />
      <div className="pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {/* Image */}
          <div className="w-full bg-primary dark:bg-slate-900">
            <Image
              src={aboutImg}
              alt="About Us"
              className="w-full mx-auto md:mx-0 rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full">
            <p className="mb-4 lg:text-sm xl:text-base">
              We are passionate about delivering the ultimate burger experience
              to you. Our mission is to serve mouthwatering burgers made with
              high-quality ingredients and exceptional care.
            </p>
            <p className="mb-4 lg:text-sm xl:text-base">
              We believe in swift and reliable delivery to get your burgers to
              you as fresh as possible. If you have any questions or need
              assistance, our 24/7 customer support team is here to ensure your
              burger cravings are satisfied.
            </p>
            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Offering Premium Quality Ingredients</p>
            </div>

            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Ensuring Fast and Reliable Delivery</p>
            </div>

            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Providing Secure Payment Options</p>
            </div>

            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Curating a Delicious Burger Selection</p>
            </div>

            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Prioritizing Customer Satisfaction</p>
            </div>

            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Offering Hassle-Free Exchanges</p>
            </div>

            <div className="flex items-center mb-2 lg:text-sm xl:text-base">
              <span className="text-primary mr-2 ">&#10003;</span>
              <p>Providing Affordable Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
