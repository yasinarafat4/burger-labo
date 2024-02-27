const ContactPage = () => {
  return (
    <div className="bg-orange-600 px-2 py-3 lg:px-8 dark:bg-slate-900 dark:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {/*  Text Container*/}
        <div className="lg:col-span-2 xl:col-span-3 mx-3 md:mx-20 lg:mx-5 space-y-3">
          <p className="text-xl md:text-2xl xl:text-3xl text-white font-semibold">
            Contact Us
          </p>
          <p className="font-bold text-3xl md:text-5xl text-white">
            Let&apos;s Connect <br /> and Discuss Your <br /> Culinary Dreams!
          </p>
          <p className="text-[13px] md:text-xl lg:text-base xl:text-2xl text-white">
            Got a craving? Share your ideas! We&apos;re here to <br /> craft
            delectable dishes tailored just for you.
          </p>
        </div>
        {/* Form Container */}
        <form className="lg:col-span-2 xl:col-span-2 dark:bg-slate-800 dark:text-white bg-primary flex flex-col justify-center items-center gap-2 md:gap-3 rounded-lg mx-3 md:mx-20 lg:mx-5 py-4 md:py-8 mt-6 mb-3">
          <input
            placeholder="Full Name"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-primary outline-none w-11/12 md:w-10/12"
            name="user_name"
          />
          <input
            placeholder="Email Address"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-primary w-11/12 md:w-10/12 outline-none"
            name="user_email"
          />
          <input
            placeholder="Phone Number"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-primary w-11/12 md:w-10/12 outline-none"
            type="number"
            name="number"
          />
          <input
            placeholder="Subject"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-primary w-11/12 md:w-10/12 outline-none"
            name="subject"
          />
          <textarea
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-primary w-11/12 md:w-10/12 outline-none"
            name="message"
            cols="20"
            rows="4"
            placeholder="How can we help?"
          ></textarea>
          <div className="">
            <input
              className="bg-white hover:bg-primary hover:border-2 hover:border-white hover:text-white duration-300 text-slate-600 md:text-lg py-[10px] cursor-pointer mt-1 rounded-full px-4 md:px-6 w-full"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
