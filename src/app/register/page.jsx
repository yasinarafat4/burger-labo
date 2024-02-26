"use client";

import GoogleLogin from "@/components/social-login/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const RegisterPage = () => {
  // Hook form functionality

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  // Image upload functionality
  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };

  // Register functionality
  const { createUser, profileUpdate } = useAuth();
  const { refresh } = useRouter();

  const onSubmit = async (data, event) => {
    const { name, email, password, photo } = data;
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      startTransition(() => {
        refresh();
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
        Register
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xs mx-auto">
        {/* Name */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className="dark:text-slate-600"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
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
        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          className="dark:text-slate-600"
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === getValues("password") || "The passwords do not match.",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )}

        {/* Photo */}
        <input
          type="file"
          id="photo"
          onChange={uploadImage}
          className="file-input file-input-bordered w-full mb-4 dark:bg-slate-700"
        />
        <button type="submit">Register</button>
        <div className="divider text-gray-500">OR</div>
        {/* Google register */}
        <GoogleLogin />
        <div className="text-center mt-2">
          Already have an account?{" "}
          <Link className="text-primary font-semibold" href={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
