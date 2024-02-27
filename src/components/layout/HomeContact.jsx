import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import homeContact from "../../../public/home-contact.jpg";
import SectionTitle from "../titles/SectionTitle";

const HomeContact = () => {
  return (
    <section className="mt-20 lg:mt-14 text-center">
      {/* Section Title */}
      <SectionTitle subHeading={"Don't Hesitate"} heading={"Contact Us"} />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Content */}
        <div className="text-start text-gray-500 p-4">
          <p className="dark:text-slate-400 mb-4 lg:text-sm xl:text-base">
            Do you have questions about our menu or services? Our team is here
            to provide you with the information you need. Feel free to get in
            touch with us anytime.
          </p>
          <p className="dark:text-slate-400 mb-4 lg:text-sm xl:text-base">
            Your feedback is invaluable to us. Whether you have suggestions for
            improvement or want to share your dining experience, we&apos;re all ears.
            Reach out to us and let us know how we can better serve you.
          </p>
          <p className="dark:text-slate-400 mb-4 lg:text-sm xl:text-base">
            Need assistance with an order or have a special request? Our
            customer support team is available to assist you. Don&apos;t
            hesitate to contact us, and we&apos;ll ensure your queries are addressed
            promptly and efficiently.
          </p>
          <Link href={"/about"}>
            <button className="btn btn-outline text-base hover:bg-primary w-3/6 md:w-2/6 lg:w-2/5 flex items-center justify-center">
              <span>Contact Us</span>{" "}
              <FaPhoneAlt className="text-base font-bold" />
            </button>
          </Link>
        </div>
        {/* Image */}
        <div>
          <Image
            src={homeContact}
            alt="Contact Us"
            className="w-11/12 mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
