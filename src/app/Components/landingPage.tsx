
import React from 'react';
import Slider from './shareComponent/header/carousel';
import logo from "../../../public/logo.png"
import Image from "next/image";
import Calender from './shareComponent/calender';


const LandingPage=async ()=> {
    const dummyData=[
        {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    {
        image:logo
    },
    ]

    return (
        <div>
            <Slider/>
            <h1 className='text-white text-2xl mt-8'>Recently updated</h1>
                <div  className='flex flex-wrap justify-between'>
                    {dummyData.map((x,index)=>{
                        return(
                        <div key={index} className='basis-1/2'>
                        <Image src={x.image} className='w-full h-auto' />
                        </div>
                        )
                    })}
                </div>
                <Calender/>
        </div>
    )
}


export default LandingPage;