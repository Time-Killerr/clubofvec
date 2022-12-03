import React from "react";
import BoardCard from "./board";
import "./about.css";

const boardMembers = [
    {
        "Name":"Thanga Akilan",
        "Posting":"Board Person",
        "imgsrc":"https://st3.depositphotos.com/7486768/17806/v/1600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg",
        "gitSrc":"https://github.com/TyroAurum/myPythonProjects/blob/main/README.md"},
    {
        "Name":"Person 1",
        "Posting":"Leader - Coders Club",
        "imgsrc":"https://st3.depositphotos.com/7486768/17806/v/1600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg",
        "gitSrc":""
    },
    {
        "Name":"Person 1",
        "Posting":"Leader - Maths Club",
        "imgsrc":"https://st3.depositphotos.com/7486768/17806/v/1600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg",
        "gitSrc":""
    }
    ]

const About = () => {
    return(
        <div className="aboutPage">
            <h2>About us</h2>
            <p>Velammal Students Club is a club functioning under the Velammal Engineering Institutions.
                The Club aims to bring together the students of all the Velammal Colleges to bring out the talents and also encourage students to 
                grow their talents.</p>
            <h2>Board Members</h2>
            <div className="containerbox">
                {boardMembers.map((boardMember) => (<BoardCard member={boardMember}/>) )}
            </div>
        </div>
    );
}

export default About;