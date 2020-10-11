import React from "react";
import ReactDom from "react-dom";
import {
  Button,
  Container,
  Col,
  Row,
  Carousel,
  Card,
  CardColumns,
  CarouselItem,
} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import icon from "./hero-mobile-tshirt-dark.png";
import array from "./Array";
import dp from "./media/ss.jpg";

const App = () => {
  return (
    <>
      <Container style={{ display: "flex", alignItems: "center" }}>
        <Col className="text-center">
          <br></br>
          <img src={icon} alt="Hacktoberfest Logo" />
          <h1>
            <i>Welcome Hacktoberfest Hackers!!</i>
          </h1>
          <p></p>
          <br></br>
          <hr></hr>
          {/* instead of this table we can have a component */}
          <Container>
            <Col className="text-center" style={{ fontFamily: "google" }}>
              <h1>Our Contributors</h1>
            </Col>
            <hr />
            <Carousel>
              {array.map(({ img, name, description }, key) => (
                <Carousel.Item key={key}>
                  <Container>
                    <CardColumns key={key} style={body}>
                      <Card bg="dark" text="white">
                        <Card.Img variant="top" src={img} />
                        <Card.Header>
                          <h3>{name}</h3>
                          <Card.Text>{description}</Card.Text>
                        </Card.Header>
                      </Card>
                    </CardColumns>
                  </Container>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </Col>
      </Container>
    </>
  );
};

const body = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default App;
