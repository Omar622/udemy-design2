import React from "react";
import TapContent from "./TabContent.js";
import style from "../../../css/HomePage/TabsContainer/TabsContainer.module.css";
import { useState } from "react";

function TabsContainer() {
    const tabs = [
        ["Python", "python_res"],
        ["Excel", "excel_res"],
        ["Web Development", "web_res"],
        ["JavaScript", "js_res"],
        ["Data Science", "data_res"],
        ["AWS Certification", "aws_res"],
        ["Drawing", "draw_res"],
    ];

    const [field, setField] = useState("python_res");
    const [chosen, setChosen] = useState(0);
    const changeField = (index) => {
        setField(tabs[index][1]);
        setChosen(index);
    };

    return (
        <>
            <div className={style.tabsStyle}>
                {tabs.map((value, index) => {
                    return (
                        <button
                            key={index}
                            className={style.transparentButton}
                            style={{
                                color: chosen === index ? "black" : "#6a6f73",
                            }}
                            onClick={() => changeField(index)}
                        >
                            {value[0]}
                        </button>
                    );
                })}
            </div>
            <TapContent field={field} searchWord={""} />
        </>
    );
}

export default TabsContainer;
