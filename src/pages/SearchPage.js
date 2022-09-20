import React from "react";
import NavBar from "../components/Common/NavBar";
import TabContent from "../components/HomePage/TabsContainer/TabContent.js";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
    let [searchParams] = useSearchParams();
    const searchWord = searchParams.get("search");

    return (
        <div>
            <NavBar />
            <TabContent field="python_res" searchWord={searchWord ?? ""} />
        </div>
    );
}

export default SearchPage;
