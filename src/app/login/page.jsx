"use client";
import GoogleLogin from "@/components/social-login/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  // Hook form functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login functionality
  const { signIn } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading...");
    try {
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully!");
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "Sign in failed!");
    }
  };

  return (
    <section className="mt-8 bg-white dark:bg-slate-700 shadow-lg shadow-black/25 px-6 py-4 md:pb-16 mx-4 md:mx-36 lg:mx-60 xl:mx-80 rounded-md">
      <h1 className="text-2xl lg:text-3xl text-center text-primary p-2 mb-8">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xs mx-auto">
        {/* Email */}
        <input
          type="email"
          name="email"
          id="email"
          className="dark:text-slate-600"
          placeholder="Your Email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
        {/* Password */}
        <input
          type="password"
          name="password"
          id="password"
          className="dark:text-slate-600"
          placeholder="Your Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
        <button type="submit">Login</button>
        <div className="divider text-gray-500">OR</div>
        {/* Google login */}
        <GoogleLogin from={from} />
        <div className="text-center mt-2 dark:text-slate-300">
          Don't have an account?{" "}
          <Link className="text-primary font-semibold" href={"/register"}>
            Register
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
