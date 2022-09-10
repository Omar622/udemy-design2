import React from "react";

import NavBar2 from "../components/CoursesPage/NavBar2";
import NavBar from "../components/NavBar";
import MainContent from "../components/CoursesPage/MainContent";
import TopContainer from "../components/CoursesPage/TopContainer";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import SideBarContainer from "../components/CoursesPage/SideBarContainer";

import { useLocation } from "react-router-dom";
import { UserConsumer } from "../contexts/userContext";

function CoursesPage() {
    const location = useLocation();
    const { id, field } = location.state;
    const dummyPrice = 200 + Math.floor(Math.random() * 100);
    const priceOff = Math.floor(Math.random() * 70);

    return (
        <>
            <NavBar />
            <UserConsumer>
                {(value) => {
                    if (value.status === "fetched") {
                        const courseData = value.data["HomePageCourses"][field][
                            "items"
                        ].find((item) => item["id"] === id);
                        const time =
                            value.data["CoursesData"][id]["curriculum_context"][
                                "data"
                            ]["estimated_content_length_in_seconds"];
                        return (
                            <>
                                <SideBarContainer
                                    image={courseData["image_750x422"]}
                                    time={time}
                                    price={dummyPrice}
                                    priceOff={priceOff}
                                />

                                <NavBar2
                                    title={courseData["title"]}
                                    rate={parseFloat(
                                        courseData["rating"]
                                    ).toFixed(1)}
                                    num_reviews={courseData["num_reviews"]}
                                    students={courseData["num_subscribers"]}
                                    price={dummyPrice}
                                    priceOff={priceOff}
                                />

                                <TopContainer
                                    title={courseData["title"]}
                                    headline={courseData["headline"]}
                                    rating={courseData["rating"]}
                                    num_reviews={courseData["num_reviews"]}
                                    num_subscribers={
                                        courseData["num_subscribers"]
                                    }
                                    instructors={
                                        courseData["visible_instructors"]
                                    }
                                    last_update_date={
                                        courseData["last_update_date"]
                                    }
                                    image={courseData["image_750x422"]}
                                    price={dummyPrice}
                                    priceOff={priceOff}
                                />
                            </>
                        );
                    } else {
                        return <Spinner />;
                    }
                }}
            </UserConsumer>
            <MainContent id={id} field={field} />
            <Footer />
        </>
    );
}

export default CoursesPage;
