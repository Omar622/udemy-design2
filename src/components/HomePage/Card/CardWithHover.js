import React from "react";
import Card from "./Card";
import style from "../../../css/HomePage/Card/CardWithHover.module.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";
import { UserConsumer } from "../../../contexts/userContext";

function CardWithHover(props) {
    const { field, id } = props;

    const [isPopOver, setIsPopOver] = useState(false);
    const toggle = () => setIsPopOver(!isPopOver);
    const onHover = () => setIsPopOver(true);
    const onHoverLeave = () => setIsPopOver(false);

    const [isFavorite, setIsFavorite] = useState(0);
    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <UserConsumer>
            {(value) => {
                const courseData = value.data["HomePageCourses"][field][
                    "items"
                ].find((item) => item["id"] === id);
                return (
                    <>
                        <div
                            id={"popOver" + String(id)}
                            onMouseEnter={onHover}
                            onMouseLeave={onHoverLeave}
                        >
                            <Card field={field} id={id} />
                        </div>
                        <Popover
                            placement="right"
                            isOpen={isPopOver}
                            target={"popOver" + String(id)}
                            toggle={toggle}
                            
                        >
                            <PopoverBody >
                                <div
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHoverLeave}
                                >
                                    <header style={{ padding_left: "12px" }}>
                                        <h3
                                            style={{
                                                margin: "5px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            {courseData["title"]}
                                        </h3>
                                        <div style={{ height: "10px" }} />
                                        <span
                                            style={{
                                                display: "block",
                                                color: "#2f6c62",
                                            }}
                                        >
                                            Updated{" "}
                                            <strong>
                                                {courseData["last_update_date"]}
                                            </strong>
                                        </span>
                                        <div style={{ height: "10px" }} />

                                        <span
                                            style={{
                                                display: "block",
                                                color: "#6a6f73",
                                            }}
                                        >
                                            {courseData["content_info"]} • All
                                            Levels • Subtitles
                                        </span>
                                        <div style={{ height: "10px" }} />

                                        <p>{courseData["headline"]}</p>
                                        <ul
                                            className={
                                                style.grid + " " + style.tikSign
                                            }
                                        >
                                            {courseData[
                                                "objectives_summary"
                                            ].map((value, key) => (
                                                <li key={key}>
                                                    <span
                                                        style={{
                                                            width: "80%",
                                                            fontSize: "15px",
                                                        }}
                                                    >
                                                        {value}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </header>
                                    <div style={{ display: "flex" }}>
                                        <button className={style.addToCartBtn}>
                                            Add to Cart
                                        </button>
                                        <IconButton onClick={toggleFavorite}>
                                            {isFavorite ? (
                                                <FavoriteIcon
                                                    style={{ color: "red" }}
                                                />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </IconButton>
                                    </div>
                                </div>
                            </PopoverBody>
                        </Popover>
                    </>
                );
            }}
        </UserConsumer>
    );
}

export default CardWithHover;
