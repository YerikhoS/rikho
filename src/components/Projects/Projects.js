import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qpay from "../../Assets/qpay2.jpeg";
import qapps from "../../Assets/qpay1.jpeg";
import xellar1 from "../../Assets/xellar1.png";
import xellar2 from "../../Assets/xellar2.png";
import xellar3 from "../../Assets/xellar3.png";
import xellar4 from "../../Assets/xellar4.png";
import kostzy from "../../Assets/kostzy.png";
import cp from "../../Assets/z_cp.jpeg";
import ch from "../../Assets/z_ch.jpeg";
import bw from "../../Assets/bw.png";
import ac from "../../Assets/ac_img.png";
import mf from "../../Assets/z_mf.jpeg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xellar1}
              isBlog={false}
              title="Xellar - Crypto Wallet"
              description="Xellar is a non-custodial Web3 wallet that prioritizes security and simplicity. Designed with the user in mind, Xellar offers an intuitive interface that makes managing your digital assets easy."
              ghLink="https://play.google.com/store/apps/details?id=com.xellar.wallets&hl=id&pli=1"
              demoLink="https://apps.apple.com/us/app/xellar-crypto-wallet/id1671215861"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qpay}
              isBlog={false}
              title="QoinPay"
              description="Qoinpay is an app that lets users convert cryptocurrency into real-world products and services. It offers a non-custodial wallet for secure asset management and easy token transfers. Users can use crypto for daily needs like mobile credit and lifestyle luxuries like hotel bookings. Identity verification (KYC) is mandatory to comply with regulations"
              ghLink="https://play.google.com/store/apps/details?id=id.qoin.crypto"
              demoLink="https://apps.apple.com/id/app/qoinpay/id1629785857"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qapps}
              isBlog={false}
              title="Qoin Digital Indonesia"
              description="The Qoin app is a non-cash payment service provider that can be used anytime and anywhere. Users can securely and conveniently conduct transactions on the Qoin app with just a touch of their fingers, including purchases, bill payments, and more."
              ghLink="https://play.google.com/store/apps/details?id=id.qoin"
              demoLink="https://apps.apple.com/id/app/qoin-digital-indonesia/id1603832217"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kostzy}
              isBlog={false}
              title="Kostzy"
              description="Kostzy is an application used for searching and renting dormitory online"
              ghLink="https://play.google.com/store/apps/details?id=com.kostzy.kostzy_mobile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bw}
              isBlog={false}
              title="BW Hospitality"
              description="
              Search for somewhere to stay in Belitung, Jambi and Jakarta, the app is with you, giving you easy access to find our hotels and book, or look up a reservation, browse photos of the rooms, facilities, and venues, and get exclusive Rate and benefits, all from your mobile phone."
              ghLink="https://play.google.com/store/apps/details?id=com.bwhospitality"
              demoLink="https://apps.apple.com/bh/app/bw-hospitality/id1498176065"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac}
              isBlog={false}
              title="AceKids - Kids Learn Math Quiz"
              description="At AceKids, we understand that learning can sometimes be a challenge for children, but it doesn't have to be. That's why we create educational and enjoyable games, helping children stay motivated and engaged in their learning. With these quizzes for kids, you can have fun while mastering crucial math skills based on the globally renowned Singapore math curriculum."
              ghLink="https://play.google.com/store/apps/details?id=me.acekids.aptic123"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cp}
              isBlog={false}
              title="Cikarang Presisi"
              description="Cikarang Presisi is an application serving as a platform for news delivery to the community within the jurisdiction of the Cikarang Regional Police, managed by the police authorities."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mf}
              isBlog={false}
              title="Moo Foods"
              description="Moo Foods is an e-commerce application created to facilitate the public in purchasing food products from Moo Foods."
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ch}
              isBlog={false}
              title="Cherry Point-Of-Sale Apps"
              description="The Cherry app serves to streamline the buying and selling process within the Cherry Lounge, ensuring better organization and record-keeping."
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
