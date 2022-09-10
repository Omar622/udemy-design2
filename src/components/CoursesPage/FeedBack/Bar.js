import React from "react";
import Rate from "../../Common/Rate";
import style from "../../../css/CoursesPage/FeedBack/FeedBack.module.css";

function Bar(props) {
    const { rate, precentage } = props;
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={style.feedBackBar}>
                <div
                    style={{
                        height: "6px",
                        backgroundColor: "#6A6F73",
                        width: String(precentage) + "%",
                    }}
                />
                <div
                    style={{
                        height: "6px",
                        backgroundColor: "#D1D7DC",
                        width: String(100 - precentage) + "%",
                    }}
                />
            </div>
            <div style={{ padding: "5px" }}></div>
            <Rate rate={rate} />
            <div style={{ padding: "2px" }}></div>
            <p
                style={{
                    color: "#5624D0",
                    textDecoration: "underline",
                    fontSize: "10px",
                    margin: "auto",
                }}
            >
                {precentage}%
            </p>
        </div>
    );
}

export default Bar;
