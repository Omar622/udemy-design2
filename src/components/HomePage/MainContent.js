import React from "react";
import TapPanel from "./TapPanel.js";
import Banner from "./Banner.js";
import style from '../../css/HomePage/MainContent.module.css'

function MainContent() {
    return <div className={style.mainContent}>
        <Banner />
        <TapPanel field="python_res" searchWord={''} />
    </div>
}

export default MainContent;