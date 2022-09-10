import React from "react";
import Rate from "../../Rate";
import Bar from "./Bar";

function FeedBack(props) {
    const { rate } = props;

    return (
        <div>
            <h3>Student feedback</h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3
                        style={{
                            color: "#ce810e",
                            fontSize: "45px",
                            display: "inline",
                            marginBottom: "0px",
                        }}
                    >
                        {rate}
                    </h3>
                    <div>
                        <Rate rate={rate} />
                    </div>
                    <h4
                        style={{
                            color: "#ce810e",
                            fontSize: "12px",
                            display: "inline",
                        }}
                    >
                        Course Rating
                    </h4>
                </div>
                <div style={{ padding: "15px" }}></div>
                <div>
                    {/* hard coded data */}
                    <Bar
                        rate={5}
                        precentage={55 + Math.round(Math.random() * 10)}
                    />
                    <Bar
                        rate={4}
                        precentage={45 + Math.round(Math.random() * 10)}
                    />
                    <Bar
                        rate={3}
                        precentage={25 + Math.round(Math.random() * 10)}
                    />
                    <Bar
                        rate={2}
                        precentage={10 + Math.round(Math.random() * 10)}
                    />
                    <Bar
                        rate={1}
                        precentage={1 + Math.round(Math.random() * 10)}
                    />
                </div>
            </div>
        </div>
    );
}

export default FeedBack;
