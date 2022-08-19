import React from "react";
import Rate from "./Rate.js";

function Card(props) {
    // props: id image title author rating people price bestSeller
    return <article className="courses-grid-item">
        <img src={props.image} alt="python" height="150px" width="260px"></img>
        <header style={{padding_left: "12px"}}>
            <h3 style={{margin:"5px"}}>{props.title.length > 41 ? (props.title.substring(0, 40) + "...") : props.title}</h3>
            <p className="coures-grid-item-description" style={{color:"#876f89"}}>{props.author}</p>
            <p style={{display: "inline", margin: "0px 5px 0px 5px", font_size: "12px", color:"#ce810e"}}>{props.rating}</p>
            <Rate rate={props.rating}></Rate>
            <p style={{display: "inline", font_size: "12px", color: "#738abb"}}>({props.people})</p>
            <h3 style={{margin: "0px 5px"}}>E€ {props.price}</h3>
        </header>
    </article>
}

export default Card;