import React from "react";
import Rate from "../../Common/Rate";

import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useState } from "react";

function ReviewTile(props) {
    const { content, rating, display_name, time_since, image } = props;

    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);
    const toggleLike = () => {
        if (isLiked) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
            setIsDisLiked(false);
        }
    };
    const toggleDisLike = () => {
        if (isDisLiked) {
            setIsDisLiked(false);
        } else {
            setIsDisLiked(true);
            setIsLiked(false);
        }
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <div>
                    <img
                        src={image}
                        className="rounded-circle"
                        style={{ width: "38px" }}
                        alt="Avatar"
                    />
                </div>
                <div style={{ padding: "10px" }} />
                <div>
                    <h4 style={{ fontSize: "15px" }}>{display_name}</h4>
                    <span style={{ display: "flex" }}>
                        <Rate rate={rating}></Rate>
                        <div style={{ padding: "5px" }} />
                        <p style={{ fontSize: "10px", color: "#83878A" }}>
                            {time_since}
                        </p>
                    </span>
                    <p style={{ fontSize: "13px" }}>{content}</p>
                    <p style={{ fontSize: "10px", color: "#83878A" }}>
                        Was his review helpful?
                    </p>
                    <div style={{ display: "flex" }}>
                        <IconButton color="primary" onClick={toggleLike}>
                            {isLiked ? (
                                <ThumbUpAltIcon style={{ color: "black" }} />
                            ) : (
                                <ThumbUpOffAltIcon style={{ color: "black" }} />
                            )}
                        </IconButton>
                        <IconButton color="primary" onClick={toggleDisLike}>
                            {isDisLiked ? (
                                <ThumbDownAltIcon style={{ color: "black" }} />
                            ) : (
                                <ThumbDownOffAltIcon
                                    style={{ color: "black" }}
                                />
                            )}
                        </IconButton>
                        <a
                            href="/"
                            style={{
                                fontSize: "12px",
                                color: "black",
                                margin: "auto 0px",
                            }}
                        >
                            Report
                        </a>
                    </div>
                </div>
            </div>
            <hr
                style={{
                    backgroundColor: "black",
                    height: "1px",
                    width: "100%",
                }}
            />
        </>
    );
}

export default ReviewTile;
