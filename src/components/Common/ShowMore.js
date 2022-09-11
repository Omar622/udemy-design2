import React from "react";
import { useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ShowMore({children }) {
    const text = children;
    const [isShowMore, setIsShowMore] = useState(true);
    const toggleisShowMore = () => setIsShowMore(!isShowMore);

    return (
        <p style={{display: "inline", whiteSpace: "pre-line"}}>
            {isShowMore ? text.slice(0, Math.min(200, text.length/2)) : text}
            <span style={{color: "#6133d3", fontWeight: "bold", cursor: "pointer"}} onClick={toggleisShowMore}>
                {isShowMore ? " ... show more " : " show less "}
                {isShowMore ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </span>
        </p>
    );
}

export default ShowMore;
