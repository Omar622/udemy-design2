import { React, useState, useEffect } from 'react';
import Card from "./Card.js";
import style from "../CSSModules/TapPanel.module.css"
import Spinner from './Spinner.js'

function TapPanel(props) {
    // props: field, searchWord

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
            if(String(element["title"]).toLowerCase().includes(props.searchWord.toLowerCase())){
                arr.push(<Card item={element} key={element["id"]} />); 
            }
        });
        return arr;
    }

    const ReloadData = () => {
        if(status === 'fetched') {
            return <div className={style.tapPanel}>
                <header><h2>{status === 'fetched' && data['HomePageCourses'][props.field]["header"]}</h2></header>
                <p style={{margin: "0px 250px 16px 0px"}}>{data['HomePageCourses'][props.field]["description"]}</p>
                <button className={style.lgWhiteBlackButton}>{"Explore " + data['HomePageCourses'][props.field]['title']}</button>
                <section className={style.coursesGrid}>{getCardList()}</section>
            </div>
        }else {
            return <Spinner />
        }
    }

    
    return <>
        <header style={{marginLeft: "24px"}}>
            <h1>A broad selection of courses</h1>
            <span style={{fontSize: "24px"}}>Choose from 204,000 online video courses with new additions published every month</span>
        </header>
        <br />
        {ReloadData()}
    </>
}

export default TapPanel;