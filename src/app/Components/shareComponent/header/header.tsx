"use client";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import logoImage from "../../../../../public/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
const Header = () => {
    const [showSearch,setShowSearch]=useState(false)
    const toggleSearch=()=>{
        setShowSearch(!showSearch)
    }
  return (
    <div>
        <div className=" mt-2 relative">
            <div className="flex justify-between ">
                <div className="flex">
                    <MenuIcon className={"text-white h-36 w-9 min-w-[2rem]"}/>
                    <Image  src={logoImage}  className={"w-64 h-36 min-w-[2rem] " }/>
                    <div className="flex justify-center items-center  ">
                        <div className="bg-[#292929] rounded-3xl flex h-20  ">
                            <div className="flex justify-center items-center  ">
                                <input className=" bg-[#292929] text-[#d8e0f2] h-9 pl-4" />
                                <SearchIcon className={"text-[#d8e0f2] h-9  "}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <SearchIcon className={"text-white  w-9 sm:hidden "} onClick={toggleSearch}/>


                    <LoginIcon className={"text-white h-36 w-9 "}/>
                </div>
            </div>

        </div>
        {showSearch?
            <div className="absolute m-auto left-0 right-0 text-white bg-[#c55fc0] h-9 mr-4 ml-4 rounded-3xl">
            <div className="relative flex">
                <input className="basis-3/4 bg-[#c55fc0] text-[#d8e0f2] min-w-[2rem]" placeholder={"Search your anime"}/>
                <SearchIcon className={"text-[#d8e0f2] h-9 w-9 basis-1/4 min-w-[2rem]"}/>
            </div>
        </div>:null}
    </div>
  );
};

export default Header;
