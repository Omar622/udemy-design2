import React from "react";
import style from '../../css/CoursesPage/NavBar2.module.css'
import { IoIosStar } from "react-icons/io";

function NavBar2(props) {
    const {title, rate, num_reviews, students} = props;
    
    return <header className={style.navBar2 }>
        <h2  style={{color: 'white', fontSize: '18px', marginBottom: '0px'}}>{title}</h2>
        <div>
            <span style={{color:"#ebb252"}}>{rate} </span>
            <IoIosStar style={{color:"#ebb252"}} />
            <span> </span>
            <span style={{color: '#CBBDF8', textDecoration: 'underline'}}>({num_reviews} ratings)</span>
            <span style={{color: 'white'}}> {students} students</span>
        </div>
    </header>
}

export default NavBar2;