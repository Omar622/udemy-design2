import React from "react";
import SearchBar from "./SearchBar.js";
import ReviewTile from "./ReviewTile.js";

function Reviews(props) {
    const { reviews } = props;
    return <div>
        <h3>Reviews</h3>
        <SearchBar />
        <br />
        {
            reviews['results'].map((val, i) => 
            <ReviewTile key={val['id']}
            content={val['content']}
            rating={val['rating']}
            display_name={val['user']['public_display_name']}
            image={val['user']['image_50x50']}
            time_since={val['created_formatted_with_time_since']}
            />
            )
        }
    </div>
}

export default Reviews;