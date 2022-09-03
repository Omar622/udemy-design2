import React from "react";
import TapPanel from "../components/js/TapPanel";
import NavBar from "../components/js/NavBar";

function HomePage() {
    return <div>
        <NavBar></NavBar>
        <TapPanel field="web_res"></TapPanel>
    </div>
}

export default HomePage;