import { React } from 'react';
import Card from "./Card.js";
import style from '../../css/HomePage/TapPanel.module.css'
import Spinner from '../Spinner.js'
import { UserConsumer } from '../../contexts/userContext.js';

function TapPanel(props) {
    const {field, searchWord} = props;
    
    return <>
        <header style={{marginLeft: "24px"}}>
            <h1>A broad selection of courses</h1>
            <span style={{fontSize: "24px"}}>Choose from 204,000 online video courses with new additions published every month</span>
        </header>
        <br />
        <UserConsumer>
            {
                value => {
                    if(value.status === 'fetched') {
                        return <div className={style.tapPanel}>
                            <header><h2>{value.data['HomePageCourses'][field]["header"]}</h2></header>
                            <p style={{margin: "0px 250px 16px 0px"}}>{value.data['HomePageCourses'][field]["description"]}</p>
                            <button className={style.lgWhiteBlackButton}>{"Explore " + value.data['HomePageCourses'][field]['title']}</button>
                            <section className={style.coursesGrid}>
                                {
                                value.data['HomePageCourses'][field]["items"].map((element) => {
                                    if(String(element["title"]).toLowerCase().includes(searchWord.toLowerCase()))
                                        return <Card field={field} id={element["id"]} key={element["id"]} />
                                    else
                                        return <></>
                                })
                                }
                            </section>
                        </div>
                    }else {
                        return <Spinner />
                    }
                }
            }
        </UserConsumer>
    </>
}

export default TapPanel;
