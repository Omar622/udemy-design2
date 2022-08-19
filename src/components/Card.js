import React from "react";
import Rate from "./Rate.js";
import data from "../dummy_data.js"

function Card(props) {
    // props: field, id 
    let item = data[props.field].find(element => parseInt(element["id"]) === parseInt(props.id));

    return <article className="courses-grid-item">
        <img src={item["image"]} alt="python" height="150px" width="260px"></img>
        <header style={{padding_left: "12px"}}>
            <h3 style={{margin:"5px"}}>{item["title"].length > 41 ? (item["title"].substring(0, 40) + "...") : item["title"]}</h3>
            <p className="coures-grid-item-description" style={{color:"#876f89"}}>{item["author"]}</p>
            <p style={{display: "inline", margin: "0px 5px 0px 5px", font_size: "12px", color:"#ce810e"}}>{item["rating"]}</p>
            <Rate rate={item["rating"]}></Rate>
            <p style={{display: "inline", font_size: "12pitem", color: "#738abb"}}>({item["people"]})</p>
            <h3 style={{margin: "0px 5px"}}>E€ {item["price"]}</h3>
        </header>
    </article>
}

export default Card;