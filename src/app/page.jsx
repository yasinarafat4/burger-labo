import Hero from "../components/layout/Hero";
import HomeAbout from "../components/layout/HomeAbout";
import HomeContact from "../components/layout/HomeContact";
import HomeMenu from "../components/layout/HomeMenu";

const page = () => {
  return (
    <>
      <Hero />
      <HomeMenu />
      <HomeAbout />
      <HomeContact />
    </>
  );
};

export default page;
