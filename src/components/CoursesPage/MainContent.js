import React from "react";
import style from "../../css/CoursesPage/MainContent.module.css";
import { UserConsumer } from "../../contexts/userContext";

function MainContent() {
    return <div className={style.mainContent}>
       <UserConsumer>
        {
        value => <div>
            
        </div>
        }
       </UserConsumer>
    </div>
}

export default MainContent;