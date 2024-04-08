"use client";
import { useStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoBookOutline,
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleCircleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useStore((state) => state.closeSideMenu);
  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
      )}
      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />
        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-10 pr-5 py-3 rounded border-b-2 text-xl border-gray-300 focus:outline-none focus:border-cyan-700"
          />
        </div>
        {/* Menu */}
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>
        {/* Line Separator */}
        <div className="w-full h-px bg-cyan-300" />
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoBookOutline size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-slate-200 rounded transition-all"
        >
          <IoPeopleCircleOutline size={30} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
