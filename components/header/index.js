import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <header className="px-10 py-9 flex justify-between font-bold bg-gradient-to-b from-[#000000cc] to-[#00000000]">
      <Link href={"/"} className="flex items-center gap-x-2 text-2xl">
        <FaPlayCircle /> NETFILMS
      </Link>
      <div className="flex gap-x-12 text-base tracking-widest">
        <Link href={"/"}>MOVIES</Link>
        <Link href={"/"}>SERIES</Link>
        <Link href={"/"}>KIDS</Link>
      </div>
    </header>
  );
}

export default Header;
