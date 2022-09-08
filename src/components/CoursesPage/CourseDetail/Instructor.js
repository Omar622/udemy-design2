import React from "react"

function Instructor(props) {
    const { instructors } = props;
    return <>
        {
            instructors.map((val) => 
            <> 
                <h3 style={{color: '#5624D0', textDecoration: 'underline', fontSize: "18px"}}>{val['display_name']}</h3>
                <p style={{color: "#6B7074", fontSize: "14px"}}>{val['job_title']}</p>
                <div style={{display: "flex"}}>
                    <img src={val['image_100x100']} className="rounded-circle" style={{width: "112px"}} alt="Avatar" />
                    <div style={{width: "12px"}}></div>
                    <div className="row">
                        {/* hard coded data */}
                        <span>★ 4.5 Instructor Rating</span>
                        <span>★ 71,958 Reviews</span>
                        <span>★ 317,097 Students</span>
                        <span>★ 7 Courses</span>
                    </div>
                </div>
                <br />
                {/* hard coded data */}
                <p>
                    Winner of the AI "<strong>Cyber Security Educator of the Year 2020</strong>" award.<br />
                    Shortlisted for "<strong>Cyber Security Influence of the year 2021</strong>"<br />
                    <br />
                    Nathan has over <strong><em>25 years experience</em></strong> in cyber security where I have advised  some of largest companies in the world, assuring security on  multi-million and multi-billion pound projects.
                    He is the <strong>CEO of Station X</strong> a cyber security career development platform. More recently he acted as  the lead security consultant on a number of the UKs mobile banking and  payment solutions helping secure to date over £71Bn in transactions.<br />
                    <br />
                    My clients have included; BP, ExxonMobil, Shell, Vodafone, VISA, T-mobile, GSK, COOP Banking Group, Royal Bank of  Scotland, Natwest, Yorkshire bank, BG Group, BT, London 2012.<br />
                    <br />
                    Over the years he have spoken at a number of security conferences,  developed free security tools, and discovered serious security  vulnerabilities in leading applications.<br />
                    <br />
                    <strong>Qualifications and education</strong><br />
                    ★ BSc. (Hons) Computing 'Networks & Communication' 1st Class Honors<br />
                    ★ SCF : SABSA Chartered Architect Foundation<br />
                    ★ CISSP : Certified Information Systems Security Professional<br />
                    ★ CISA : Certified Information Systems Auditor<br />
                    ★ CISM : Certified Information Security Manager<br />
                    ★ ISO 27001 Certified ISMS Lead Auditor<br />
                    ★ CEH : Certified Ethical Hacker<br />
                    ★ OSCP : Offensive Security Certified Professional<br />
                </p>
            </>
            )
        }
    </>
}

export default Instructor;