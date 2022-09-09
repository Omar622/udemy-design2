import React from "react";
import style from "../../css/CoursesPage/SideBarContainer.module.css";
import Price from "../Price";

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

function SideBarContainer(props) {
    const { image, time, price, priceOff } = props;
    const reFormatTime = (time) => {
        const hours = Math.floor(time/3600);
        const minutes = Math.floor((time - hours*3600) / 60);
        return [hours, Math.max(minutes, 0)];
    }

    return <div className={style.container}>
        <img src={image} alt='course' width='99.5%' height='191px' style={{margin: "1px"}}/>
        <div style={{padding: "20px"}}>
            <Price price={price} priceOff={priceOff} size={40} color='black' colorOff='#6A6F73'/>

            <button className={style.addCartBtn}>Add to Cart</button>
            <button className={style.buyNowBtn}>Buy now</button>
            <div style={{width: "100%", textAlign: "center"}}>
                <span style={{fontSize: "14px"}}>30-Day Money-Back Guarantee</span>
            </div>
            <br />
            <div>
                <h4 style={{fontSize: "16px", fontWeight: "bold"}}>This course includes: </h4>
                <ul style={{listStyle: "none", padding: "0px"}}>
                    <li style={{fontSize: "14px"}}><OndemandVideoIcon style={{width: "15px"}}/> {reFormatTime(time)[0]} hours on-demand video</li>
                    <li style={{fontSize: "14px"}}><DescriptionOutlinedIcon style={{width: "15px"}}/> 1 article</li>
                    <li style={{fontSize: "14px"}}><SystemUpdateAltIcon style={{width: "15px"}}/> 3 downloadable resources</li>
                    <li style={{fontSize: "14px"}}><AllInclusiveOutlinedIcon style={{width: "15px"}}/> Full lifetime access</li>
                    <li style={{fontSize: "14px"}}><StayCurrentPortraitOutlinedIcon style={{width: "15px"}}/> Access on mobile and TV</li>
                    <li style={{fontSize: "14px"}}><EmojiEventsOutlinedIcon style={{width: "15px"}}/> Certificate of completion</li>
                </ul>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <a href="/" style={{color: "black", fontWeight: "700", fontSize: "15px"}}>Share</a>
                <a href="/" style={{color: "black", fontWeight: "700", fontSize: "15px"}}>Gift this course</a>
                <a href="/" style={{color: "black", fontWeight: "700", fontSize: "15px"}}>Apply Coupon</a>
            </div>
        </div>
        <hr style={{width: "100%"}}/>
        <div style={{padding: "20px"}}>
            <h4 style={{fontSize: "18px", fontWeight: "bold"}}>Training 5 or more people?</h4>
            <p style={{fontSize: "14px"}}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
            <button className={style.tryUdemyBusinessBtn}>Try Udemy Business</button>
        </div>
    </div>
}

export default SideBarContainer;