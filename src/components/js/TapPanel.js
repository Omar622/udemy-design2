import React from "react";
import data from "../../dummy_data.js"
import Card from "./Card.js";
import style from "../CSSModules/TapPanel.module.css"

function TapPanel(props) {
    // props: field
    let header = data[props.field]["header"];
    let description = data[props.field]["description"];
    let btn_txt = "Explore " + props.field;

    const getCardList = () => {
        const arr = [];
        data[props.field]["courses"].forEach(element => {
            arr.push(<Card field={props.field} id={element["id"]}></Card>);
        });
        return arr;
    }

    return <div className={style.tapPanel}>
        <header><h3>{header}</h3></header>
        <p>{description}</p>
        <button className={style.lgWhiteBlackButton}>{btn_txt}</button>
        <section className={style.coursesGrid}>{getCardList()}</section>
    </div>
}

export default TapPanel;