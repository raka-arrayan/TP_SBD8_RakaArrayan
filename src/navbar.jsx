import { useEffect, useState } from "react";
import Logo from "./assets/Logo.svg";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={Logo} className="h-12 w-12" />
          <h1 className=" text-sm md:text-lg font-bold">Network Laboratory</h1>
        </div>
        <ul className="flex space-x-4 text-sm md:text-lg lg:text-l  md:font-semibold">
          <li className="hover:text-gray-400 cursor-pointerpointer">
            <a href="#home">Home </a>
          </li>
          <li className="hover:text-gray-400 cursor-pointerpointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointerpointer">
            <a href="#activity">Activity</a>
          </li>
          <li className="hover:text-gray-400 cursor-pointerpointer">
            <a href="#assistant">Assistant</a>
          </li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-gray-400">Course</span>
            <ul className="absolute left-0 top-full pt-2 w-32 bg-white text-black shadow-lg hidden group-hover:block rounded z-50">
              <li className="px-4 py-2 hover:bg-gray-800">
                <a href="#sbd">SBD</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800">
                <a href="#dmj">DMJ</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800">
                <a href="#os">OS</a>
              </li>
            </ul>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="#ntlab">NTLAB</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
