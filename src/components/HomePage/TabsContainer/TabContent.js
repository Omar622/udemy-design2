import { React } from "react";
import CardWithHover from "../Card/CardWithHover.js";
import style from "../../../css/HomePage/TabsContainer/TabContent.module.css";
import Spinner from "../../Common/Spinner.js";
import { UserConsumer } from "../../../contexts/userContext.js";

function TabContent(props) {
    const { field, searchWord } = props;

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
                                    {value.data["HomePageCourses"][field][
                                        "items"
                                    ].map((element) => {
                                        if (
                                            String(element["title"])
                                                .toLowerCase()
                                                .includes(
                                                    searchWord.toLowerCase()
                                                )
                                        )
                                            return (
                                                <CardWithHover
                                                    field={field}
                                                    id={element["id"]}
                                                    key={element["id"]}
                                                />
                                            );
                                        else return <div key={element["id"]}></div>;
                                    })}
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
