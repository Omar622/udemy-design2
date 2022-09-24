import React from "react";
import style from "../../css/HomePage/Banner.module.css";
import image from "../../images/banner-home-page.jpg";

function Banner() {
    return (
        <section className={style.banner}>
            <div className={style.contentBoxBanner}>
                <header>
                    <h1 style={{ fontSize: "40px" }}>
                        New to Udemy? Lucky you.
                    </h1>
                </header>
                <p style={{ fontSize: "24px" }}>
                    courses start at E€ 169.99. Get your new student offer
                    before it expires.
                </p>
            </div>
            <div className={style.homePageBanner}>
                <img
                    className={style.homePageBannerImage}
                    src={image}
                    alt="offer"
                />
            </div>
        </section>
    );
}

export default Banner;
