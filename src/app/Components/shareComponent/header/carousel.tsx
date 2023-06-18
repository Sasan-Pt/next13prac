"use client"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import logoImage from "../../../../../public/logo.png"
import React from 'react';
import Testt from "@/app/Components/shareComponent/header/testt";

const Slider = props => {
    const items=[
        {
        image:logoImage
    }
    ,
        {
            image: logoImage
        }
    ]
    return (
        <div>
            <Carousel>
                {
                    items.map( (item, i) => <Testt key={i} item={item.image.src} /> )
                }
            </Carousel>
        </div>
    );
};


export default Slider;