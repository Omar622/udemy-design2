import React from "react";
import Rate from "./Rate.js";
import style from "../CSSModules/Card.module.css"


function Card(props) {
    // props: item
    const item = props.item;

    return <article className={style.coursesGridItem}>
        <img src={item["image_480x270"]} alt={item["context_info"]['label']['title']} height="150px" width="260px"></img>
        <header style={{padding_left: "12px"}}>
            <h3 style={{margin:"5px"}}>{reFormatTitle(item["title"])}</h3>
            <p className={style.couresGridItemDescription} style={{color:"#876f89"}}>{reFormatAuthors(item["visible_instructors"])}</p>
            <p style={{display: "inline", margin: "0px 5px 0px 5px", fontSize: "12px", color:"#ce810e"}}>{parseFloat(item["rating"]).toFixed(1)}</p>
            <Rate rate={parseFloat(item["rating"]).toFixed(1)}></Rate>
            <p style={{display: "inline", fontSize: "12px", color: "#738abb"}}>({item["num_reviews"]})</p>
            <h3 style={{margin: "0px 5px"}}>E€ {
            genPrice()}</h3>
        </header>
    </article>
}


function reFormatAuthors(instructors){
    let authors = "";
    instructors.forEach(element => {
        authors += element["title"] + ", ";
    });
    authors = authors.slice(0, -2);
    return authors.length > 40 ? (authors.substring(0, 39) + "...") : authors;
}
function reFormatTitle(title){
    return title.length > 38 ? (title.substring(0, 37) + "...") : title;
}
function genPrice(){
    return 1000 + Math.floor(Math.random() * 1000);
}

export default Card;