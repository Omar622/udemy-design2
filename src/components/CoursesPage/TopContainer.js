import React from "react";
import style from "../../css/CoursesPage/TopContainer.module.css";
import Rate from "../Rate.js";
import Price from "../Price";

import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LanguageIcon from '@mui/icons-material/Language';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';

function TopContainer(props) {
    const {title, headline, rating, num_reviews, num_subscribers, instructors, last_update_date, image, price, priceOff } = props;
    
    const reFormatAuthors = (instructors) => {
        let authors = "";
        instructors.forEach(element => authors += element["title"] + ", ");
        return authors.slice(0, -2)
    }

    return <div className={style.topContainer}>
        <div className={style.wraper}>
            <img src={image} alt={title} className={style.image}/>
            <h2 className={style.title}>{title}</h2>
            <h3 className={style.headline}>{headline}</h3>
            <div>
                <p style={{display: "inline", margin: "0px 5px 0px 5px", fontSize: "12px", color:"#f3ca8c"}}>{parseFloat(rating).toFixed(1)}</p>
                <Rate rate={parseFloat(rating).toFixed(1)} />
                <span> </span>
                <span style={{color: '#cbbdf8', textDecoration: 'underline'}}>({num_reviews} ratings)</span>
                <span style={{color: 'white'}}> {num_subscribers} students</span>
            </div>
            <div style={{color: 'white'}}>Created by <span style={{color: '#cbbdf8', textDecoration: 'underline'}}>{reFormatAuthors(instructors)}</span></div>
            <div className={style.details}>
                <span style={{color: 'white'}}><NewReleasesIcon style={{width: "18px"}}/> Last updated {last_update_date}</span>
                <span style={{color: 'white'}}><LanguageIcon style={{width: "18px"}}/> English</span>
                <span style={{color: 'white'}}><ClosedCaptionIcon style={{width: "18px"}}/> English</span>
            </div>
            <Price className={style.price} price={price} priceOff={priceOff} size={40} color='white' colorOff='#d1d7dc'/>
            <button className={style.addCartBtn}>Add to Cart</button>
            <div className={style.purchase}>
                <div style={{margin: "10px", textAlign: "center"}}>
                    <p style={{color: 'white', fontSize: '13px', fontWeight: "600"}}>30-Day Money-Back Guarantee</p>
                    <p style={{color: 'white', fontSize: '13px', fontWeight: "600"}}>Full Lifetime Access</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <a href="/" style={{color: "white", fontWeight: "bold"}}>Share</a>
                    <a href="/" style={{color: "white", fontWeight: "bold"}}>Gift this course</a>
                    <a href="/" style={{color: "white", fontWeight: "bold"}}>Apply Coupon</a>
                </div>
            </div>
        </div>
    </div>
}

export default TopContainer;

// 