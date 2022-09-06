import React from "react";
import style from "../../css/CoursesPage/TopContainer.module.css";
import Rate from "../Rate.js";

function TopContainer(props) {
    const {title, headline, rating, num_reviews, num_subscribers, instructors, last_update_date} = props;

    const reFormatAuthors = (instructors) => {
        let authors = "";
        instructors.forEach(element => authors += element["title"] + ", ");
        return authors.slice(0, -2)
    }

    return <div className={style.topContainer}>
        <h2 style={{color: "white", width: "70%"}}>{title}</h2>
        <h3 style={{color: "white", fontSize: "18px", width: "50%"}}>{headline}</h3>
        <div>
            <p style={{display: "inline", margin: "0px 5px 0px 5px", fontSize: "12px", color:"#f3ca8c"}}>{parseFloat(rating).toFixed(1)}</p>
            <Rate rate={parseFloat(rating).toFixed(1)} />
            <span> </span>
            <span style={{color: '#cbbdf8', textDecoration: 'underline'}}>({num_reviews} ratings)</span>
            <span style={{color: 'white'}}> {num_subscribers} students</span>
        </div>
        <div style={{color: 'white'}}>Created by <span style={{color: '#cbbdf8', textDecoration: 'underline'}}>{reFormatAuthors(instructors)}</span></div>
        <div>Last updated {last_update_date}</div>
    </div>
}

export default TopContainer;