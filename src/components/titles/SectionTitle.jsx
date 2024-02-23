const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-4">
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeading}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
