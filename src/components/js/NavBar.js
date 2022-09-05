import React from "react";
import style from "../CSSModules/NavBar.module.css"
// import { Link } from "react-router-dom";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

function NavBar() {
    let searchWord = '';
    const handleInputChanged = (event) => searchWord = event.target.value;
    const handleFormSubmitted = (event) => {
        event.preventDefault();
        window.location.href = '/search?search=' + searchWord; 
    }
    
    return <header className={style.navBar}>
        {/* burger button */}
        <button className={style.phoneView + " " + style.transparentButton + " "+ style.navBarItem}>
            <MenuRoundedIcon />
        </button>

        {/* udemy icon */}
        <a className={style.navBarItem} href="/">
            <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="udemy" width="91" height="34" />
        </a>

        {/* Categories button */}
        <nav>
            <button className={style.pcView + " " + style.transparentButton + " " + style.navBarItem}>
                Categories
            </button>
        </nav>

        {/* search field (display in pc view only) */}
        <form className={style.navBarInput + " " + style.navBarItem} onSubmit={handleFormSubmitted}>
            <input className={style.pcView + " " + style.navBarInputText} type={"text"} name="search" placeholder="Search for anything" style={{padding: "0px 20px"}} onChange={handleInputChanged}/>
            <button className={style.pcView + " " + style.transparentButton} type={"submit"}>
                <SearchRoundedIcon />
            </button>
        </form>

        {/* business button (displayed in small-3 mode only) */}
        <nav>
            <button className={style.sm3 + " " + style.transparentButton + " " + style.navBarItem}>
                Udemy Business
            </button>
        </nav>

        {/* Teach button (displayed in small-2 mode only) */}
        <nav>
            <button className={style.sm2 + " " + style.transparentButton + " " + style.navBarItem}>
                Teach on Udemy
            </button>
        </nav>

        {/* search button (displayed in phone view only) */}
        <button className={style.phoneView + " " + style.transparentButton + " " + style.navBarItem}>
            <SearchRoundedIcon style={{fontSize: "24px"}}/>
        </button>

        {/* shopping button */}
        <button className={style.transparentButton + " " + style.navBarItem}>
            <ShoppingCartOutlinedIcon />
        </button>

        {/* log in button (displayed in pc or larger view only) */}
        <button className={style.pcView + " " + style.mdWhiteBlackButton  + " " + style.navBarItem}>
            Log in
        </button>

         {/* sign-up button (displayed in pc or larger view only)  */}
        <button className={style.pcView + " " + style.mdBlackWhiteButton  + " " + style.navBarItem}>
            Sign up
        </button>

         {/* language button (displayed in pc view only)  */}
        <button className={style.pcView + " " + style.smWhiteBlackButton  + " " + style.navBarItem}>
            <LanguageOutlinedIcon />
        </button>
    </header>
}

export default NavBar;