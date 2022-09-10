import React from "react";
import style from "../../css/Common/Price.module.css";

function Price(props) {
    const { price, priceOff, size, color, colorOff } = props;
    return (
        <div style={{ display: "flex" }}>
            <h3
                className={style.displayedPrice}
                style={{ fontSize: size, color: color }}
            >
                E£{(price - (price * priceOff) / 100).toFixed(2)}
            </h3>
            <div style={{ display: "flex", margin: "15px 2px 2px 8px" }}>
                <h4
                    className={style.priceBefore}
                    style={{ fontSize: size / 2.3, color: colorOff }}
                >
                    E£{price}
                </h4>
                <h4
                    className={style.off}
                    style={{ fontSize: size / 2.3, color: color }}
                >
                    {priceOff}% off
                </h4>
            </div>
        </div>
    );
}

export default Price;
