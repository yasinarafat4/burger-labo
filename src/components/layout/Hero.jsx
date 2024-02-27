import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/burger.png";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center md:mt-4">
      <div className="px-3 lg:px-0 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Life is tastier
          <br />
          with a delicious
          <span className="text-primary"> Burger</span>
        </h1>
        <p className="my-6 w-4/5 text-gray-500 dark:text-slate-400 text-sm">
          Burger is the essential ingredient that completes every day, infusing
          life with simple yet satisfying joy.
        </p>
        <div className="flex gap-1 md:gap-4 text-sm">
          <Link href={"/menu"}>
            {" "}
            <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-2 py-1 md:px-4 md:py-2 rounded-full">
              Order now
              <Right />
            </button>
          </Link>
          <Link href={"/about"}>
            {" "}
            <button className="flex items-center border-0 gap-2 py-2 text-gray-600 dark:text-slate-400 font-semibold">
              Learn more
              <Right />
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image src={heroImage} width={450} alt={"hero-Image"} />
      </div>
    </section>
  );
};

export default Hero;
