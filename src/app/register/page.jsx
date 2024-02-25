"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import googleImage from "../../../public/google.png";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <section className="mt-8 bg-white shadow-lg shadow-black/25 px-6 py-4 md:pb-16 mx-4 md:mx-36 lg:mx-60 xl:mx-80 rounded-md">
      <h1 className="text-2xl lg:text-3xl text-center text-primary p-2 mb-8">
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center text-green-600">
          User created successfully.
        </div>
      )}
      {error && (
        <div className="my-4 text-center text-primary">
          An error has occurred.
          <br />
          Please try again later
        </div>
      )}
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={creatingUser} type="submit">
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
