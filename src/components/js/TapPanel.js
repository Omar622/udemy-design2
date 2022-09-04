import { React, useState, useEffect } from 'react';
import Card from "./Card.js";
import style from "../CSSModules/TapPanel.module.css"

function TapPanel(props) {
    // props: field
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    // run only once
    useEffect(() => {
        const fetchData = async () => {
            setStatus('fetching');
            // please use json server to watch ../../data/data.json
            const response = await fetch("http://localhost:3000/data");
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        }
        fetchData();
    }, []);

    const getCardList = () => {
        const arr = [];
        data['HomePageCourses'][props.field]["items"].forEach(element => {
            arr.push(<Card item={element} key={element["id"]}></Card>);
        });
        return arr;
    }

    return <>
        <header style={{marginLeft: "24px"}}>
            <h1>A broad selection of courses</h1>
            <span style={{fontSize: "24px"}}>Choose from 204,000 online video courses with new additions published every month</span>
        </header>
        <div className={style.tapPanel}>
            <header><h3>{status === 'fetched' && data['HomePageCourses'][props.field]["header"]}</h3></header>
            <p>{status === 'fetched' && data['HomePageCourses'][props.field]["description"]}</p>
            <button className={style.lgWhiteBlackButton}>{status === 'fetched' && "Explore " + data['HomePageCourses'][props.field]['title']}</button>
            <section className={style.coursesGrid}>{status === 'fetched' && getCardList()}</section>
        </div>
    </>
}

export default TapPanel;