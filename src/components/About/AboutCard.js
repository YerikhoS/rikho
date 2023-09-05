import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yerikho Sutandi </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br /> I am a Software Engineer with more than 2 years experience
            <br />
            Additionally, I am currently employed as a Mobile Engineer at
            PT Qoin Digital Indonesia.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Book
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
