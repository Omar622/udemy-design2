import React from "react";
import { UserConsumer } from "../../contexts/userContext";
import style from "../../css/CoursesPage/MainContent.module.css";
import ObjectivesBox from "./ObjectivesBox";
import CourseContent from "./CourseContent";
import Spinner from "../Common/Spinner";
import CourseDetails from "./CourseDetail/CourseDetails";
import FeedBack from "./FeedBack/Feedback";
import Reviews from "./Reviews/Reviews";

function MainContent(props) {
    const { id, field } = props;

    return (
        <div className={style.mainContent}>
            <div className={style.wraper}>
                <UserConsumer>
                    {(value) => {
                        if (value.status === "fetched") {
                            const courseData = value.data["HomePageCourses"][
                                field
                            ]["items"].find((item) => item["id"] === id);
                            const courseData2 = value.data["CoursesData"][id];
                            const reviews = value.data["Review"][id];
                            return (
                                <>
                                    <ObjectivesBox
                                        objectives={
                                            courseData["objectives_summary"]
                                        }
                                    />
                                    <br />
                                    <CourseContent
                                        estimatedTime={
                                            courseData2["curriculum_context"][
                                                "data"
                                            ][
                                                "estimated_content_length_in_seconds"
                                            ]
                                        }
                                        numberOfLectures={
                                            courseData2["curriculum_context"][
                                                "data"
                                            ]["num_of_published_lectures"]
                                        }
                                        sections={
                                            courseData2["curriculum_context"][
                                                "data"
                                            ]["sections"]
                                        }
                                    />
                                    <CourseDetails
                                        requirements={
                                            courseData2["details"][
                                                "Requirements"
                                            ]
                                        }
                                        description={
                                            courseData2["details"][
                                                "description"
                                            ]
                                        }
                                        for_who={
                                            courseData2["details"]["for_who"]
                                        }
                                        instructors={
                                            courseData["visible_instructors"]
                                        }
                                    />
                                    <br />
                                    <FeedBack
                                        rate={parseFloat(
                                            courseData["rating"]
                                        ).toFixed(1)}
                                    />
                                    <br />
                                    <Reviews reviews={reviews} />
                                </>
                            );
                        } else {
                            return <Spinner />;
                        }
                    }}
                </UserConsumer>
            </div>
        </div>
    );
}

export default MainContent;
