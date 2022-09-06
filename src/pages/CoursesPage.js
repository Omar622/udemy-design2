import React from "react";

import NavBar2 from "../components/CoursesPage/NavBar2";
import NavBar from "../components/NavBar";
import MainContent from "../components/CoursesPage/MainContent";
import TopContainer from "../components/CoursesPage/TopContainer";

import { useLocation } from 'react-router-dom'

function CoursesPage() {
    const location = useLocation();
    const { courseSectionsData } = location.state;
    const { reviews } = location.state;
    const { courseData } = location.state;
    // Data of course is in courseData, courseSectionsData, reviews
    
    return <div>
        <NavBar />
        <NavBar2 title={courseData['title']} rate={parseFloat(courseData['rating']).toFixed(1)} num_reviews={courseData['num_reviews']} students={courseData['num_subscribers']} price={1000 + Math.floor(Math.random() * 1000)}/>
        <TopContainer title={courseData['title']} headline={courseData['headline']} rating={courseData['rating']}
        num_reviews={courseData['num_reviews']} num_subscribers={courseData['num_subscribers']} instructors={courseData['visible_instructors']} last_update_date={courseData['last_update_date']}/>
        <MainContent courseData={courseData} courseSectionsData={courseSectionsData} reviews={reviews}/>
    </div>
}

export default CoursesPage;