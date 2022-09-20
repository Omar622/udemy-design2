import React from "react";
import Banner from "./Banner.js";
import TabsContainer from "./TabsContainer/TabsContainer.js";
import style from "../../css/HomePage/MainContent.module.css";

function MainContent() {
    return (
        <div className={style.mainContent}>
            <Banner />
            <br />
            <br />
            <header style={{ marginLeft: "24px" }}>
                <h1>A broad selection of courses</h1>
                <span style={{ fontSize: "24px" }}>
                    Choose from 204,000 online video courses with new additions
                    published every month
                </span>
            </header>
            <br />
            <TabsContainer />
        </div>
    );
}

export default MainContent;
