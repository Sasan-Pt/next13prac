"use client";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import logoImage from "../../../../../public/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import Slider from "./carousel"

const Header = () => {
    const [showSearch,setShowSearch]=useState(false)
    const [showMenu,setShowMenu]=useState(false)
   const toggleShowMenu=()=>{
        setShowMenu(!showMenu)
   }

    const toggleSearch=()=>{
        setShowSearch(!showSearch)
    }
  return (
      <>

        <div className=" mt-2 relative w-full">
            <div className="flex justify-between w-full">

                <div className="flex w-full justify-center items-center ">
                    <MenuIcon className={"text-white  w-full"} style={{ width: '2rem', height: '5rem' }} onClick={toggleShowMenu}/>

                    <Image  src={logoImage}  className={"h-24 w-full " }/>

                    <div className="flex justify-center items-center  w-full hidden sm:flex">
                        <div className="bg-[#292929] rounded-3xl flex h-16  w-full">
                            <div className="flex justify-center items-center w-full ">
                                <input className=" bg-[#292929] text-[#d8e0f2] h-9 pl-4 w-full" />
                                <SearchIcon className={"text-[#d8e0f2] h-9  w-full "} style={{ width: '2rem', height: '5rem' }}/>
                            </div>
                        </div>
                    </div>

                </div>

                    <div className="flex  items-center " >
                    <SearchIcon className="text-white sm:hidden w-full" onClick={toggleSearch} style={{ width: '2rem', height: '5rem' }}/>
                    <LoginIcon className={"text-white h-36  w-full"} style={{ width: '2rem', height: '5rem' }}/>
                </div>

            </div>


        </div>



        {showSearch?
            <div className="absolute m-auto left-0 right-0 text-white bg-[#c55fc0] h-11 mr-4 ml-4 rounded-3xl z-50">
            <div className="relative flex">
                <input className="basis-3/4 bg-[#c55fc0] text-[#d8e0f2] min-w-[2rem] ml-2" placeholder={"Search your anime"}/>
                <SearchIcon className={"text-[#d8e0f2] h-9 w-9 basis-1/4 min-w-[2rem]"}/>
            </div>
        </div>:null}
          {showMenu?
          <div className="relative">
              <div className="absolute  text-[#d8e0f2]  z-50  bg-[#c55fc0] text-center w-full ">
                  <ul >
                  <li>sadasdasdffhy</li>
                  <li>sadasdasdffhy</li>
                  <li>sadasdasdffhy</li>
                  <li>sadasdasdffhy</li>
                  <li>sadasdasdffhy</li>
                  <li>sadasdasdffhy</li>
                  <li>sadasdasdffhy</li>
                  </ul>
              </div>
          </div>:null}
          





    </>
  );
};

export default Header;
