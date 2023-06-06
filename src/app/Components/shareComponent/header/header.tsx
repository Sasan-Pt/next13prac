"use client";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import logoImage from "../../../../../public/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
const Header = () => {
  return (
    <div>
        <div className="flex mt-2 relative">
            <MenuIcon className={"text-white h-36 w-9 "}/>
            <Image  src={logoImage}  className={"w-72 h-36" }/>
            <SearchIcon className={"text-white h-36 w-9 "} />
            <LoginIcon className={"text-white h-36 w-9 "}/>
        </div>
        <div className="absolute m-auto left-0 right-0 text-white bg-[#02f7f5] h-9 mr-4 ml-4 rounded-3xl">
            <div className="relative flex">
                <input className="basis-3/4"/>
                <SearchIcon className={"text-white h-9 w-9 basis-1/4"}/>
            </div>
        </div>
    </div>
  );
};

export default Header;
