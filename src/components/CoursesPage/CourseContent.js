import React from "react";
import Accordion from "react-bootstrap/Accordion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

function CourseContent(props) {
    const { estimatedTime, numberOfLectures, sections } = props;
    const reFormatTime = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - hours * 3600) / 60);
        return [hours, Math.max(minutes, 0)];
    };
    const reFormatContentLength = (lectures, time) => {
        const hours = reFormatTime(time)[0];
        const minutes = reFormatTime(time)[1];
        if (hours === 0 && minutes === 0) return `${lectures} lectures`;
        else if (hours === 0) return `${lectures} lectures • ${minutes}min`;
        else return `${lectures} lectures • ${hours}hr ${minutes}min`;
    };

    return (
        <>
            <h3 style={{ fontWeight: "bold" }}>Course content</h3>
            <br />
            <p style={{ fontSize: "14px", display: "inline" }}>
                {sections.length} sections
            </p>
            <span> • </span>
            <p style={{ fontSize: "14px", display: "inline" }}>
                {numberOfLectures} lectures
            </p>
            <span> • </span>
            <p style={{ fontSize: "14px", display: "inline" }}>
                {reFormatTime(estimatedTime)[0]}h{" "}
                {reFormatTime(estimatedTime)[1]}m total length
            </p>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                {sections.map((val, sectionKey) => (
                    <Accordion.Item eventKey={sectionKey} key={sectionKey}>
                        <Accordion.Header>
                            {
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "95%",
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {val["title"]}
                                    </h4>
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            color: "#67696A",
                                        }}
                                    >
                                        {reFormatContentLength(
                                            val["items"].length,
                                            val["content_length"]
                                        )}
                                    </p>
                                </div>
                            }
                        </Accordion.Header>
                        <Accordion.Body>
                            {val["items"].map((item, itemKey) => (
                                <div
                                    key={itemKey}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                    <h5
                                        style={{
                                            fontSize: "14px",
                                            color: "#7A7B7C",
                                        }}
                                    >
                                        <PlayCircleFilledIcon
                                            style={{
                                                color: "black",
                                                width: "15px",
                                            }}
                                        />{" "}
                                        {item["title"]}
                                    </h5>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "20%",
                                        }}
                                    >
                                        <a
                                            style={{
                                                display: "inline",
                                                color: "#5624D0",
                                                fontSize: "14px",
                                            }}
                                            href="/"
                                        >
                                            {item["can_be_previewed"] === true
                                                ? "Preview"
                                                : ""}
                                        </a>
                                        <p
                                            style={{
                                                display: "inline",
                                                color: "#7A7E82",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {item["content_summary"]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
}

export default CourseContent;
