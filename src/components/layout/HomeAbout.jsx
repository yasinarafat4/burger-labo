import SectionTitle from "../titles/SectionTitle";

const HomeAbout = () => {
  return (
    <section className="mt-20 lg:mt-14 text-center">
      {/* Section Title */}
      <SectionTitle subHeading={"Our Story"} heading={"About Us"} />
      <div className="text-gray-500">
        <p className="max-w-2xl mx-auto  dark:text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          provident dolore atque excepturi rerum similique, consequuntur
          quibusdam, eveniet obcaecati molestiae a quae velit. Vitae, temporibus
          soluta veniam hic quod autem.
        </p>
        <p className="max-w-2xl mx-auto  dark:text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          provident dolore atque excepturi rerum similique, consequuntur
          quibusdam, eveniet obcaecati molestiae a quae velit. Vitae, temporibus
          soluta veniam hic quod autem.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
