import React from "react";
import { UserConsumer } from "../../contexts/userContext";
import style from "../../css/CoursesPage/MainContent.module.css";
import ObjectivesBox from "./ObjectivesBox";
import CourseContent from "./CourseContent";
import Spinner from '../Spinner';

function MainContent(props) {
    const { id, field } = props;
    return <div className={style.mainContent}>
       <UserConsumer>
        {
            value => {
                if(value.status === 'fetched') {
                    const courseData = value.data['HomePageCourses'][field]['items'].find((item) => item['id'] === id);
                    const courseData2 = value.data['CoursesData'][id];
                    return <>
                        <ObjectivesBox objectives={courseData['objectives_summary']}/>
                        <br />
                        <CourseContent 
                        estimatedTime={courseData2['curriculum_context']['data']['estimated_content_length_text']}
                        numberOfLectures={courseData2['curriculum_context']['data']['num_of_published_lectures']}
                        sections={courseData2['curriculum_context']['data']['sections']}
                        />

                    </>
                }else {
                    return <Spinner />
                }
            }
        }
       </UserConsumer>
    </div>
}

export default MainContent;