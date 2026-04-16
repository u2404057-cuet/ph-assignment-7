'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { GoGraph } from "react-icons/go";


const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="navbar bg-base-200 mb-20">
      <div className="ps-4">
        <Link href='/' className="text-lg font-extrabold text-black">Keen<span className="text-green-900 font-semibold">Keeper</span></Link>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex gap-2 flex-col sm:flex-row">
          <Link href='/'><button className={`btn ${pathName === '/' ? "bg-green-900 text-white" : ''}`} ><RiHome2Line />Home</button></Link>
          <Link href='/timeline'><button className={`btn ${pathName === '/timeline' ? "bg-green-900 text-white" : ''}`} ><FaRegClock />Timeline</button></Link>
          <Link href='/stats'><button className={`btn ${pathName === '/stats' ? "bg-green-900 text-white" : ''}`} ><GoGraph />Stats</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
