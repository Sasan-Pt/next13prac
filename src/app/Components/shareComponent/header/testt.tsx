import React from 'react';
import { Paper, Button } from '@mui/material'
import Image from "next/image";

const Testt=(props)=> {
    return (
        <Paper>
            <h2>xsfsdfs</h2>
            <Image src={props.item} width={400} height={400}/>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}


export default Testt;