import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

function Rate(props) {
    const { rate } = props;
    return (
        <>
            {rate >= 0.8 ? (
                <IoIosStar style={{ color: "#ebb252" }} />
            ) : rate >= 0.3 ? (
                <IoIosStarHalf style={{ color: "#ebb252" }} />
            ) : (
                <IoIosStarOutline style={{ color: "#ebb252" }} />
            )}
            {rate >= 1.8 ? (
                <IoIosStar style={{ color: "#ebb252" }} />
            ) : rate >= 1.3 ? (
                <IoIosStarHalf style={{ color: "#ebb252" }} />
            ) : (
                <IoIosStarOutline style={{ color: "#ebb252" }} />
            )}
            {rate >= 2.8 ? (
                <IoIosStar style={{ color: "#ebb252" }} />
            ) : rate >= 2.3 ? (
                <IoIosStarHalf style={{ color: "#ebb252" }} />
            ) : (
                <IoIosStarOutline style={{ color: "#ebb252" }} />
            )}
            {rate >= 3.8 ? (
                <IoIosStar style={{ color: "#ebb252" }} />
            ) : rate >= 3.3 ? (
                <IoIosStarHalf style={{ color: "#ebb252" }} />
            ) : (
                <IoIosStarOutline style={{ color: "#ebb252" }} />
            )}
            {rate >= 4.8 ? (
                <IoIosStar style={{ color: "#ebb252" }} />
            ) : rate >= 4.3 ? (
                <IoIosStarHalf style={{ color: "#ebb252" }} />
            ) : (
                <IoIosStarOutline style={{ color: "#ebb252" }} />
            )}
        </>
    );
}

export default Rate;
