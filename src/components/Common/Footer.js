import React from "react";
import style from "../../css/Common/Footer.module.css";

function Footer() {
    const item = [
        "Udemy Business",
        "careers",
        "Terms",
        "Teach on Udemy",
        "Blog",
        "Privacy policy",
        "Get the app",
        "Help and Support",
        "cookie settings",
        "About us",
        "Affiliate",
        "Sitemap",
        "Contact us",
        "Inverstors",
        "Accessibiltiy statement",
    ];

    return (
        <div className={style.footer}>
            <div className={style.topCompanies}>
                <h2 style={{ color: "white", fontSize: "20px" }}>
                    Top companies choose{" "}
                    <span style={{ color: "#CEC0FC" }}>Udemy Business</span> to
                    build in-demand career skills.
                </h2>
                <div style={{ minWidth: "550px" }}>
                    <img
                        src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                        width="115px"
                        height="44px"
                        alt="Nasdaq"
                    />
                    <img
                        src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
                        width="115px"
                        height="44px"
                        alt="Nasdaq"
                    />
                    <img
                        src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                        width="115px"
                        height="44px"
                        alt="Nasdaq"
                    />
                    <img
                        src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                        width="115px"
                        height="44px"
                        alt="Nasdaq"
                    />
                    <img
                        src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
                        width="115px"
                        height="44px"
                        alt="Nasdaq"
                    />
                </div>
            </div>
            <hr
                style={{
                    backgroundColor: "white",
                    height: "2px",
                    width: "100%",
                    margin: "5px",
                }}
            />
            <ul className={style.footerMain} style={{ listStyle: "none" }}>
                {item.map((val, key) => (
                    <li className={style.item} key={key}>
                        <a
                            href="/"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            {val}
                        </a>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <div className={style.logoAndCopyRight}>
                <a href="/">
                    <img
                        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                        alt="udemy"
                        width="91"
                        height="34"
                        color="white"
                    />
                </a>
                <span className={style.item} style={{ margin: "auto 0px" }}>
                    © 2022 Udemy, Inc.
                </span>
            </div>
        </div>
    );
}

export default Footer;
