import React from "react";
import Rate from "./Rate.js";
import data from "../../dummy_data.js"
import style from "../CSSModules/Card.module.css"


function Card(props) {
    // props: field, id 
    let item = data[props.field]["courses"].find(element => parseInt(element["id"]) === parseInt(props.id));

    return <article className={style.coursesGridItem}>
        <img src={item["image"]} alt="python" height="150px" width="260px"></img>
        <header style={{padding_left: "12px"}}>
            <h3 style={{margin:"5px"}}>{item["title"].length > 38 ? (item["title"].substring(0, 37) + "...") : item["title"]}</h3>
            <p className={style.couresGridItemDescription} style={{color:"#876f89"}}>{ReFormatAuthors(item["instructors"])}</p>
            <p style={{display: "inline", margin: "0px 5px 0px 5px", font_size: "12px", color:"#ce810e"}}>{item["rating"]}</p>
            <Rate rate={item["rating"]}></Rate>
            <p style={{display: "inline", font_size: "12pitem", color: "#738abb"}}>({item["people"]})</p>
            <h3 style={{margin: "0px 5px"}}>E€ {item["price"]}</h3>
        </header>
    </article>
}

function ReFormatAuthors(instructors){
    let authors = "";
    instructors.forEach(element => {
        authors += element["name"] + ", ";
    });
    return authors.slice(0, -2);
}

export default Card;