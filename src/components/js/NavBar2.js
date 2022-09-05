import React from "react";
import style from "../CSSModules/NavBar2.module.css"
import { IoIosStar } from "react-icons/io";

function NavBar2(props) {
    // props: title, rate, num_reviews, students
    
    return <header className={style.navBar2 }>
        <h2  style={{color: 'white', fontSize: '18px', marginBottom: '0px'}}>{props.title}</h2>
        <div>
            <span style={{color:"#ebb252"}}>{props.rate} </span>
            <IoIosStar style={{color:"#ebb252"}} />
            <span> </span>
            <span style={{color: '#CBBDF8', textDecoration: 'underline'}}>({props.num_reviews} ratings)</span>
            <span style={{color: 'white'}}> {props.students} students</span>
        </div>
    </header>
}

export default NavBar2;