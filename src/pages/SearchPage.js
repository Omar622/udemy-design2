import React from "react";
import NavBar from "../components/Common/NavBar";
import { useSearchParams } from "react-router-dom";
import MainContent from "../components/SearchPage/MainContent";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const searchWord = searchParams.get("search");

    return (
        <div>
            <NavBar />
            <MainContent searchWord={searchWord}/>
        </div>
    );
}

export default SearchPage;
