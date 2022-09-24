import React from "react";
import Spinner from "../Common/Spinner";
import CardWithHover from "../HomePage/Card/CardWithHover.js";
import {UserConsumer} from "../../contexts/userContext";
import style from "../../css/SearchPage/MainContent.module.css";

function MainContent(props) {
    const { searchWord } = props;
    const fields = [
        ["python_res"],
        ["excel_res"],
        ["web_res"],
        ["js_res"],
        ["data_res"],
        ["aws_res"],
        ["draw_res"],
    ];

    const loadMatchedCourses = (data) => {
        const matchedCourses = [];
        fields.forEach((field) => {
            data[field]["items"].forEach((course) => {
                if (
                    String(course["title"])
                        .toLowerCase()
                        .includes(searchWord.toLowerCase())
                ) {
                    matchedCourses.push([course, field]);
                }
            });
        });
        return matchedCourses;
    };

    const content = (data) => {
        const matchedCourses = loadMatchedCourses(data);
        if (matchedCourses.length === 0) {
            return (
                <div className={style.notFound}>
                    <span style={{ fontSize: "28px", fontWeight: "700" }}>
                        Sorry, we couldn't find any results for <br />"
                        {searchWord}"
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "20px", fontWeight: "700" }}>
                        Try adjusting your search. Here are some ideas:
                    </span>
                    <ul>
                        <li style={{ fontSize: "18px" }}>
                            Make sure all words are spelled correctly
                        </li>
                        <li style={{ fontSize: "18px" }}>
                            Try different search terms
                        </li>
                        <li style={{ fontSize: "18px" }}>
                            Try more general search terms
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className={style.content}>
                    <section className={style.coursesGrid}>
                        {matchedCourses.map((course) => (
                            <CardWithHover
                                field={course[1]}
                                id={course[0]["id"]}
                                key={course[0]["id"]}
                            />
                        ))}
                    </section>
                </div>
            );
        }
    };

    return (
        <div>
            <UserConsumer>
                {(value) => {
                    if (value.status === "fetched") {
                        return content(value.data["HomePageCourses"]);
                    } else {
                        return <Spinner />;
                    }
                }}
            </UserConsumer>
        </div>
    );
}

export default MainContent;
