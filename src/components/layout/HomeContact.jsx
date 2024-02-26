import SectionTitle from "../titles/SectionTitle";

const HomeContact = () => {
  return (
    <section className="mt-20 lg:mt-14 text-center">
      {/* Section Title */}
      <SectionTitle subHeading={"Don't Hesitate"} heading={"Contact Us"} />
      <div className="mt-8">
        <a className="text-xl md:text-2xl lg:text-3xl text-gray-500" href="tel:+8801868518963">
          +8801868518963
        </a>
      </div>
    </section>
  );
};

export default HomeContact;
