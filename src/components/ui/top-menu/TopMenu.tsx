import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Papeleria
        </span>
        <span> | CSIP</span>
      </Link>
      {/* Menu Center */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/computing-printing"
        >
          Cómputo e Impresión
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/school"
        >
          Escolar
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/arts-crafts"
        >
          Arte y Manualidades
        </Link>
      </div>
      {/* Search, cart, Menu  with icons from react icons*/}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-cyan-800 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-slate-100">
          Menú
        </button>
      </div>
    </nav>
  );
};
