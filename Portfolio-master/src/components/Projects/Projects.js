import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import IpayModule1 from "../../Assets/Projects/IpayModule1.png";
import IpayModule2 from "../../Assets/Projects/IpayModule2.png";
import IpayModule3 from "../../Assets/Projects/IpayModule3.png";
import IpayModule4 from "../../Assets/Projects/IpayModule4.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Modules I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IpayModule1}
              isBlog={false}
              title="InstantPay Pre Login Website"
              description="There is only informative screens, what the Instantpay does, in which areas it works, what the services it's provide to the users."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IpayModule2}
              isBlog={false}
              title="Single Payout"
              description="This is the screen after the login in the portal, It's used for the sending payment to the beneficiary."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IpayModule3}
              isBlog={false}
              title="Bulk Payout"
              description="This is the screen after the login in the portal, It's used for the sending payment In Bulk to the beneficiary."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IpayModule4}
              isBlog={false}
              title="Payout Link"
              description="This is the screen after the login in the portal, It's used for the creating payout Link."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
