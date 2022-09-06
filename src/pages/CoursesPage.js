import React from "react";

import NavBar2 from "../components/CoursesPage/NavBar2";
import NavBar from "../components/NavBar";

import { useLocation } from 'react-router-dom'

function CoursesPage() {
    const location = useLocation();
    // const { courseSectionsData } = location.state;
    // const { reviews } = location.state;
    const { courseData } = location.state;
    // Data of course is in courseData, courseSectionsData, reviews
    
    return <div>
        <NavBar />
        <NavBar2 title={courseData['title']} rate={parseFloat(courseData['rating']).toFixed(1)} num_reviews={courseData['num_reviews']} students={courseData['num_subscribers']}/>
        <div style={{height: '1000px'}}></div>
    </div>
}

export default CoursesPage;