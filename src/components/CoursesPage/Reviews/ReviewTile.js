import React from "react";
import Rate from "../../Rate";
import style from "../../../css/CoursesPage/Reviews/LikeAvatar.module.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

function ReviewTile(props) {
    const { content, rating, display_name, time_since, image } = props;
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
                        <div className={style.likeAvatar}>
                            <ThumbUpOutlinedIcon style={{ width: "20px" }} />
                        </div>
                        <div className={style.likeAvatar}>
                            <ThumbDownOffAltOutlinedIcon
                                style={{ width: "20px" }}
                            />
                        </div>
                        <p
                            style={{
                                fontSize: "12px",
                                textDecoration: "underline",
                                margin: "auto 0px",
                            }}
                        >
                            Report
                        </p>
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
