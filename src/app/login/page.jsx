import Image from "next/image";
import Link from "next/link";
import googleImage from "../../../public/google.png";

const LoginPage = () => {
  return (
    <section className="mt-8 bg-white shadow-lg shadow-black/25 px-6 py-4 md:pb-16 mx-4 md:mx-36 lg:mx-60 xl:mx-80 rounded-md">
      <h1 className="text-2xl lg:text-3xl text-center text-primary p-2 mb-8">Login</h1>
      <form className="max-w-xs mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          //   value={email}
          //    disabled={loginInProgress}
          //    onChange={ev => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          //   value={password}
          //    disabled={loginInProgress}
          //    onChange={ev => setPassword(ev.target.value)}
        />
        <button
          // disabled={loginInProgress}
          type="submit"
        >
          Login
        </button>
        <div className="divider text-gray-500">
          OR
        </div>
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
          Login with google
        </button>
        <div className="text-center mt-2">
          Don't have an account? <Link className="text-primary font-semibold" href={"/register"}>Register</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
