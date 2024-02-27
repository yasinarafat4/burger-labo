import Hero from "@/components/layout/Hero";
import HomeAbout from "@/components/layout/HomeAbout";
import HomeCategory from "@/components/layout/HomeCategory";
import HomeContact from "@/components/layout/HomeContact";
import HomeParallax from "@/components/layout/HomeParallax";

const page = () => {
  return (
    <>
      <Hero />
      <HomeCategory />
      <HomeAbout />
      <HomeContact />
      <HomeParallax />
    </>
  );
};

export default page;
