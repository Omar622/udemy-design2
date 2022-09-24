import React from "react";
import style from "../../../css/HomePage/TabsContainer/Carousel.module.css";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Carousel(props) {
    const { children, show } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const next = () => {
        if (currentIndex < length - show)
            setCurrentIndex((prevState) =>
                Math.min(prevState + show - 1, length - show)
            );
    };
    const prev = () => {
        if (currentIndex > 0)
            setCurrentIndex((prevState) => Math.max(prevState - show + 1, 0));
    };

    return (
        <div className={style.carouselContainer}>
            {currentIndex > 0 && (
                <div className={style.leftArrow}>
                    <IconButton onClick={prev} size="large">
                        <ArrowBackIosNewIcon style={{ color: "white" }} />
                    </IconButton>
                </div>
            )}
            <div className={style.carouselWrapper}>
                <div className={style.carouselContentWrapper}>
                    <div
                        className={style.carouselContent + ` show-${show}`}
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / show)
                            }%)`,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            {currentIndex < length - show && (
                <div className={style.rightArrow}>
                    <IconButton onClick={next} size="large">
                        <ArrowForwardIosIcon style={{ color: "white" }} />
                    </IconButton>
                </div>
            )}
        </div>
    );
}

export default Carousel;
