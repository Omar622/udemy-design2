import React from "react";
import style from "../../css/HomePage/Categories.module.css";

function Categories() {
    const categoriesImagesSrc = [
        [
            "Design",
            "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
        ],
        [
            "Development",
            "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
        ],
        [
            "Marketing",
            "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
        ],
        [
            "IT and Software",
            "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
        ],
        [
            "Personal Development",
            "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
        ],
        [
            "Business",
            "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
        ],
        [
            "Photography",
            "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
        ],
        [
            "Music",
            "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
        ],
    ];

    return (
        <section style={{ paddingLeft: "24px" }}>
            <h2 style={{fontWeight:"bold", fontSize: "26px"}}>Top categories</h2>
            <div>
                {categoriesImagesSrc.map((value, key) => (
                    <div className={style.gridItem} key={key}>
                        <img
                            src={value[1]}
                            alt="category"
                            className={style.image}
                            // width="300px"
                            // height="300px"
                        />
                        <span style={{ fontWeight: "bold" }}>{value[0]}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
