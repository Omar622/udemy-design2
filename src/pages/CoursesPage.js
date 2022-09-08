import React from "react";

import NavBar2 from "../components/CoursesPage/NavBar2";
import NavBar from "../components/NavBar";
import MainContent from "../components/CoursesPage/MainContent";
import TopContainer from "../components/CoursesPage/TopContainer";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

import { useLocation } from 'react-router-dom';
import { UserConsumer } from '../contexts/userContext';

function CoursesPage() {
    const location = useLocation();
    const { id, field } = location.state;
    
    return <>
        <NavBar />
        <UserConsumer>
        {
            value => {
                if(value.status === 'fetched') {
                    const courseData = value.data['HomePageCourses'][field]['items'].find((item) => item['id'] === id);
                    return <>
                        <NavBar2 title={courseData['title']} rate={parseFloat(courseData['rating']).toFixed(1)} num_reviews={courseData['num_reviews']} students={courseData['num_subscribers']} price={1000 + Math.floor(Math.random() * 1000)}/>
                        <TopContainer title={courseData['title']} headline={courseData['headline']} rating={courseData['rating']}
                        num_reviews={courseData['num_reviews']} num_subscribers={courseData['num_subscribers']} instructors={courseData['visible_instructors']} last_update_date={courseData['last_update_date']}/>
                    </>
                }else {
                    return <Spinner />
                }
            }
        }
        </UserConsumer>
        <MainContent id={id} field={field}/>
        <Footer />
    </>
    

}

export default CoursesPage;