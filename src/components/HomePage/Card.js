import React, { useMemo } from "react";
import Rate from "../Rate.js";
import style from '../../css/HomePage/Card.module.css'
import { Link } from "react-router-dom";
import { UserConsumer } from "../../contexts/userContext.js";

function Card(props) {
    const {field, id} = props;

    const reFormatAuthors = (instructors) => {
        let authors = "";
        instructors.forEach(element => authors += element["title"] + ", ");
        authors = authors.slice(0, -2);
        return authors.length > 40 ? (authors.substring(0, 39) + "...") : authors;
    }
    const reFormatTitle = (title) => title.length > 38 ? (title.substring(0, 37) + "...") : title;
    const genPrice = () => 1000 + Math.floor(Math.random() * 1000);


    return useMemo(() => 
        <UserConsumer>
            {
                value => {
                    const courseData = value.data['HomePageCourses'][field]['items'].find((item) => item['id'] === id);
                    return <Link to="/courses" state={{id: id, field: field}} style={{textDecoration: 'none', color: 'black'}}>
                        <article className={style.coursesGridItem}>
                            <img src={courseData["image_480x270"]} alt={courseData["context_info"]['label']['title']} height="150px" width="260px"></img>
                            <header style={{padding_left: "12px"}}>
                                <h3 style={{margin:"5px", fontSize: "20px"}}>{reFormatTitle(courseData["title"])}</h3>
                                <p className={style.couresGridItemDescription} style={{color:"#876f89"}}>{reFormatAuthors(courseData["visible_instructors"])}</p>
                                <p style={{display: "inline", margin: "0px 5px 0px 5px", fontSize: "12px", color:"#ce810e"}}>{parseFloat(courseData["rating"]).toFixed(1)}</p>
                                <Rate rate={parseFloat(courseData["rating"]).toFixed(1)} />
                                <p style={{display: "inline", fontSize: "12px", color: "#738abb"}}>({courseData["num_reviews"]})</p>
                                <h3 style={{margin: "0px 5px", fontSize: "15px"}}>E€{genPrice()}</h3>
                            </header>
                        </article>
                    </Link>
                }
            }
        </UserConsumer>
    , [field, id])
}

export default Card;