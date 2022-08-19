import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

function Rate(props) {
    // props: rate
    return <>
        {props.rate >= .8 ? <IoIosStar style={{color:"#ebb252"}}/> : props.rate >= .3 ? <IoIosStarHalf style={{color:"#ebb252"}}/> : <IoIosStarOutline style={{color:"#ebb252"}}/>}
        {props.rate >= 1.8 ? <IoIosStar style={{color:"#ebb252"}}/> : props.rate >= 1.3 ? <IoIosStarHalf style={{color:"#ebb252"}}/> : <IoIosStarOutline style={{color:"#ebb252"}}/>}
        {props.rate >= 2.8 ? <IoIosStar style={{color:"#ebb252"}}/> : props.rate >= 2.3 ? <IoIosStarHalf style={{color:"#ebb252"}}/> : <IoIosStarOutline style={{color:"#ebb252"}}/>}
        {props.rate >= 3.8 ? <IoIosStar style={{color:"#ebb252"}}/> : props.rate >= 3.3 ? <IoIosStarHalf style={{color:"#ebb252"}}/> : <IoIosStarOutline style={{color:"#ebb252"}}/>}
        {props.rate >= 4.8 ? <IoIosStar style={{color:"#ebb252"}}/> : props.rate >= 4.3 ? <IoIosStarHalf style={{color:"#ebb252"}}/> : <IoIosStarOutline style={{color:"#ebb252"}}/>}
    </>
}

export default Rate;