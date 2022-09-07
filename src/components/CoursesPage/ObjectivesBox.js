import React from "react";
import style from '../../css/CoursesPage/ObjectivesBox.module.css';

function ObjectivesBox(props) {
    const { objectives } = props;
    return <div className={style.objectivesBox}>
        <h3 style={{fontWeight: "bold"}}>What you'll learn</h3>
        <ul className={style.grid}>
            {
                objectives.map((value, key) => <li>
                    <span style={{width: "80%", fontSize: "15px"}} key={key}>{value}</span>
                </li>)
            }
        </ul>
    </div>
}

export default ObjectivesBox;