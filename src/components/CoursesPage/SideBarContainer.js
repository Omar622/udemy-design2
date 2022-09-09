import React from "react";
import style from "../../css/CoursesPage/SideBarContainer.module.css";

function SideBarContainer(props) {
    const { image, time, price } = props;
    return <div className={style.container}>
        <img src={image} alt='course' width='99.5%' height='191px' style={{margin: "1px"}}/>
        <div style={{padding: "20px"}}>
            <h3 style={{fontWeight: "bold", fontSize: "45px"}}>E£{price}</h3>
            <button className={style.addCartBtn}>Add to Cart</button>
            <button className={style.buyNow}>Buy now</button>
            <h1 style={{color: "Red"}}>still working in this component</h1>
        </div>
    </div>
}

export default SideBarContainer;