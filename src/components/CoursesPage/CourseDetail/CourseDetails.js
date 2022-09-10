import React from "react";
import Instructor from "./Instructor";
function CourseDetails(props) {
    const { requirements, description, for_who, instructors } = props;
    const for_who_list = String(for_who).split("\n");
    return (
        <>
            <br />
            <h2>Requirements</h2>
            <ul>
                {requirements.map((val) => (
                    <li>{val}</li>
                ))}
            </ul>
            <br />
            <h2>Description</h2>
            <p style={{ fontSize: "14px" }}>{description}</p>
            <br />
            <h2>Who this course is for:</h2>
            <ul>
                {for_who_list.map((val) => (
                    <li style={{ fontSize: "14px" }}>{val}</li>
                ))}
            </ul>
            <br />
            <h2>Instructors</h2>
            <Instructor instructors={instructors} />
        </>
    );
}

export default CourseDetails;
