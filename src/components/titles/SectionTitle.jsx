const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-6">
      <h3 className="uppercase text-sm md:text-lg text-gray-500 font-semibold leading-4 dark:text-slate-400">
        {subHeading}
      </h3>
      <h2 className="text-primary font-bold text-2xl md:text-4xl italic">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
