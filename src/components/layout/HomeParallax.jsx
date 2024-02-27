import Link from "next/link";

const HomeParallax = () => {
  return (
    <div
      className="featured-item bg-fixed bg-cover text-white py-36 md:py-40 lg:py-52 xl:py-64 mt-12"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl">
          BECOME THE BEST RECIPIENT!
        </h2>
        <p className="text-xs md:text-sm lg:text-xl my-3">
          Take the first step to achieving your best choice.
        </p>
        <Link href="/menu">
          <div className="my-6 lg:mt-6">
            <button className="w-5/12 md:w-2/12 mx-auto bg-primary text-[#FFFFFF] hover:bg-[#FFFFFF] hover:duration-500 hover:text-black font-semibold text-sm py-3 px-4 rounded-sm">
              GET STARTED
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeParallax;
