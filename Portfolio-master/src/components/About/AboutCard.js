import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Ajay Kumar Tripathi </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I&nbsp;have&nbsp;completed&nbsp;MCA at LPU in Punjab, 2021.
            <br />
            I'm&nbsp;currently&nbsp;employed&nbsp;as&nbsp;a&nbsp;Angular&nbsp;Developer&nbsp;at <a style={{textDecoration: 'unset'}} href="https://www.instantpay.in/">Instantpay&nbsp;India&nbsp;Limited</a>.
            <br />
            I have 3.5 years of experience in the Angular Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to work with new technology, and learning to new things.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ajay Tripathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
