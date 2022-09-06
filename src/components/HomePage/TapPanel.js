import { React, useState, useEffect } from 'react';
import Card from "./Card.js";
import style from '../../css/HomePage/TapPanel.module.css'
import Spinner from '../Spinner.js'

function TapPanel(props) {
    const {field, searchWord} = props;

    const getCardList = () => {
        return data['HomePageCourses'][field]["items"].map(element => {
            if(String(element["title"]).toLowerCase().includes(searchWord.toLowerCase()))
                return <Card courseData={element} courseSectionsData={data['CoursesData'][element["id"]]} reviews={data['Review'][element["id"]]} key={element["id"]} />
            else
                return <></>
        });
    }
    const ReloadData = () => {
        if(status === 'fetched') {
            return <div className={style.tapPanel}>
                <header><h2>{status === 'fetched' && data['HomePageCourses'][field]["header"]}</h2></header>
                <p style={{margin: "0px 250px 16px 0px"}}>{data['HomePageCourses'][field]["description"]}</p>
                <button className={style.lgWhiteBlackButton}>{"Explore " + data['HomePageCourses'][field]['title']}</button>
                <section className={style.coursesGrid}>{getCardList()}</section>
            </div>
        }else {
            return <Spinner />
        }
    }


    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    useEffect(() => { // run only once
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