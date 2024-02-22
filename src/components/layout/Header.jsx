import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        BurgerLabo
      </Link>
      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
        <Link href={" "}>Home</Link>
        <Link href={" "}>Menu</Link>
        <Link href={" "}>About</Link>
        <Link href={" "}>Contact</Link>
        <Link
          className="bg-primary px-8 py-2 text-white rounded-full"
          href={" "}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
