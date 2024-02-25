"use client";

import Image from "next/image";
import Link from "next/link";
import googleImage from "../../../public/google.png";
const RegisterPage = () => {
  

  return (
    <section className="mt-8 bg-white shadow-lg shadow-black/25 px-6 py-4 md:pb-16 mx-4 md:mx-36 lg:mx-60 xl:mx-80 rounded-md">
      <h1 className="text-2xl lg:text-3xl text-center text-primary p-2 mb-8">
        Register
      </h1>
      <form className="max-w-xs mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          Register
        </button>
        <div className="divider text-gray-500">OR</div>
        <button
          type="button"
          // onClick={() => signIn('google', {callbackUrl: '/'})}
          className="flex gap-4 justify-center"
        >
          <Image
            src={googleImage}
            alt={"Google Login"}
            width={24}
            height={24}
          />
          Register with google
        </button>
        <div className="text-center mt-2">
          Already have an account? <Link className="text-primary font-semibold" href={"/login"}>Login</Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
