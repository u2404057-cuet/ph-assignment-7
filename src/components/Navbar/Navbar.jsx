'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { GoGraph } from "react-icons/go";


const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="navbar bg-base-300 mb-20 flex flex-col md:flex-row items-center">
      <div className="ps-4">
        <Link href='/' className="md:text-lg text-3xl font-extrabold text-black">Keen<span className="text-green-900 font-semibold">Keeper</span></Link>
      </div>
      <div className="flex justify-center md:justify-end items-center px-2 w-full">
        <div className="flex gap-2 flex-wrap justify-center">
          <Link href='/'><button className={`btn ${pathName === '/' ? "bg-green-900 text-white" : ''}`} ><RiHome2Line />Home</button></Link>
          <Link href='/timeline'><button className={`btn ${pathName === '/timeline' ? "bg-green-900 text-white" : ''}`} ><FaRegClock />Timeline</button></Link>
          <Link href='/stats'><button className={`btn ${pathName === '/stats' ? "bg-green-900 text-white" : ''}`} ><GoGraph />Stats</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
