import Hero from "@/components/layout/Hero";
import HomeAbout from "@/components/layout/HomeAbout";
import HomeContact from "@/components/layout/HomeContact";
import HomeMenu from "@/components/layout/HomeMenu";
import HomeParallax from "@/components/layout/HomeParallax";

const page = () => {
  return (
    <>
      <Hero />
      <HomeMenu />
      <HomeAbout />
      <HomeContact />
      <HomeParallax />
    </>
  );
};

export default page;
