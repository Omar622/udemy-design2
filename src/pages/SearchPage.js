import React from "react";
import NavBar from "../components/NavBar";
import TapPanel from "../components/HomePage/TapPanel";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
    let [searchParams] = useSearchParams();
    const searchWord = searchParams.get("search");

    return <div>
        <NavBar />
        <TapPanel field="python_res" searchWord={searchWord??''} />
    </div>
}

export default SearchPage;