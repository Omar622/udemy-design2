import { React, useState, useEffect } from "react";
import CardWithHover from "../Card/CardWithHover.js";
import style from "../../../css/HomePage/TabsContainer/TabContent.module.css";
import Spinner from "../../Common/Spinner.js";
import { UserConsumer } from "../../../contexts/userContext.js";
import Carousel from "./Carousel.js";

function TabContent(props) {
    const { field } = props;

    const [windowWidth, setWindowWidth] = useState(0);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };
    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.addEventListener("resize", updateDimensions);
    }, []);

    const show = () => {
        if (windowWidth < 780) return 2;
        else if (windowWidth < 1060) return 3;
        else if (windowWidth < 1330) return 4;
        else return 5;
    };

    return (
        <>
            <UserConsumer>
                {(value) => {
                    if (value.status === "fetched") {
                        return (
                            <div className={style.tabContent}>
                                <header>
                                    <h2>
                                        {
                                            value.data["HomePageCourses"][
                                                field
                                            ]["header"]
                                        }
                                    </h2>
                                </header>
                                <p style={{ margin: "0px 250px 16px 0px" }}>
                                    {
                                        value.data["HomePageCourses"][field][
                                            "description"
                                        ]
                                    }
                                </p>
                                <button className={style.lgWhiteBlackButton}>
                                    {"Explore " +
                                        value.data["HomePageCourses"][field][
                                            "title"
                                        ]}
                                </button>
                                <section className={style.coursesGrid}>
                                    <Carousel show={show()}>
                                        {value.data["HomePageCourses"][field][
                                            "items"
                                        ].map((element) => {
                                            return (
                                                <div
                                                    style={{ width: "272px" }}
                                                    key={element["id"]}
                                                >
                                                    <CardWithHover
                                                        field={field}
                                                        id={element["id"]}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </section>
                            </div>
                        );
                    } else {
                        return <Spinner />;
                    }
                }}
            </UserConsumer>
        </>
    );
}

export default TabContent;
