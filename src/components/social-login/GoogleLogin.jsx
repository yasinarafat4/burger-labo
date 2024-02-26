import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import toast from "react-hot-toast";
import googleImage from "../../../public/google.png";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const { replace, refresh } = useRouter();

  const handleGoogleLogin = async ({ from }) => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully!");
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "Sign in faild!");
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="flex gap-4 justify-center dark:text-slate-300"
      >
        <Image src={googleImage} alt={"Google Login"} width={24} height={24} />
        Continue with google
      </button>
    </div>
  );
};

export default GoogleLogin;
