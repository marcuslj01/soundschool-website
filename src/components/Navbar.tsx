import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full h-[104px] bg-black/50 fixed top-0 left-0 z-50">
      <div className="max-w-[1512px] mx-auto h-full px-5 flex justify-between items-center">
        <Link href="/" className="relative">
          <Image
            src="/Soundschool.png"
            alt="Soundschool Logo"
            width={200}
            height={40}
            priority
          />
        </Link>

        <div className="relative">
          <FaShoppingCart className="text-white text-2xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-[#FF5C91] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
