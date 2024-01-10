import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row } from "react-bootstrap";
import NavBar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import MyJumbotron from "./assets/components/Jumbotron";
import LibriCard from "./assets/components/AllBooks";
import ButtonCategory from "./assets/components/Button";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <MyJumbotron></MyJumbotron>

      <Container>
        <Row>
          <LibriCard></LibriCard>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
