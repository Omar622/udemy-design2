import React from "react";
import data from "../dummy_data.js"
import Card from "./Card.js";

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

    return <div className="tap-panel">
        <header>
            <h3>{header}</h3>
        </header>
        <p>
            {description}
        </p>
        <button className="lg-white-black-button">{btn_txt}</button>
        <section className="courses-grid">
            {getCardList()}
        </section>
    </div>
}

export default TapPanel;