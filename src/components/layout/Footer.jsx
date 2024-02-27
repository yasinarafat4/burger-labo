import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 text-slate-700 bg-slate-100 shadow-lg dark:bg-slate-800  dark:text-white">
        <aside className="space-y-2">
          {/* Social */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-slate-700 dark:text-white text-xl" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-slate-700 dark:text-white text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-slate-700 dark:text-white text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-slate-700 dark:text-white text-xl" />
            </a>
          </div>
          {/* Links */}
          <div className="flex w-full font-semibold">
            <Link className="hover:underline" href={"/menu"}>Menu</Link>
            <div className="divider divider-horizontal"></div>
            <Link className="hover:underline" href={"/about"}>About</Link>
            <div className="divider divider-horizontal"></div>
            <Link className="hover:underline" href={"/contact"}>Contact</Link>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold">Burger Labo</h2>
          <p>
            Copyright &copy; {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
