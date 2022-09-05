import React from "react";
import NavBar from "../components/js/NavBar";
import TapPanel from "../components/js/TapPanel";
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