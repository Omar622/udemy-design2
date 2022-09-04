import React, { useState } from "react";
import NavBar from "../components/js/NavBar";
import MainContentHomePage from "../components/js/MainContentHomePage";
import searchContext from "../context/Search";

function HomePage() {
    const [searchWord, setSearchWord] = useState('');
    return <searchContext.Provider value={{searchWord, setSearchWord}}>
        <div>
            <NavBar></NavBar>
            <MainContentHomePage searchWord={searchWord}></MainContentHomePage>
        </div>
    </searchContext.Provider>
}

export default HomePage;