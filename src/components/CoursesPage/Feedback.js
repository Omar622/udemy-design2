import React from 'react'
import Rate from '../Rate';
import style from '../../css/CoursesPage/FeedBack.module.css';

function FeedBack(props) {
    const { rate } = props;

    const Bar = (rate, precentage) => 
        <div style={{display: "flex", flexDirection: "row"}}>
            <div className={style.feedBackBar}>
                <div style={{height: "6px", backgroundColor: "#6A6F73", width: String(precentage)+'%'}} />
                <div style={{height: "6px", backgroundColor: "#D1D7DC", width: String(100-precentage)+'%'}} />
            </div>
            <div style={{padding: "5px"}}></div>
            <Rate rate={rate}/>
            <div style={{padding: "2px"}}></div>
            <p style={{color: '#5624D0', textDecoration: 'underline', fontSize: "10px", margin: "auto"}}>{precentage}%</p>
        </div>
    

    return <div>
        <h3>Student feedback</h3>
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h3 style={{color:"#ce810e", fontSize: "45px", display: "inline", marginBottom: "0px"}}>{rate}</h3>
                <div><Rate rate={rate}/></div>
                <h4 style={{color:"#ce810e", fontSize: "12px", display: "inline"}}>Course Rating</h4>
            </div>
            <div style={{padding: "15px"}}></div>
            {/* hard coded data */}
            <div>
                {Bar(5, 55+Math.round(Math.random()*10))}
                {Bar(4, 45+Math.round(Math.random()*10))}
                {Bar(3, 25+Math.round(Math.random()*10))}
                {Bar(2, 10+Math.round(Math.random()*10))}
                {Bar(1, Math.round(Math.random()*10))}
            </div>
        </div>
    </div>
}

export default FeedBack