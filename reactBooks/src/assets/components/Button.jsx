import { Container, Button } from "react-bootstrap";
import FantasyBooks from "../../../json/fantasy.json";
import HystoryBooks from "../../../json/History.json";
import HorrorBooks from "../../../json/horror.json"

const ButtonCategory = ({setCard}) => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Button className="mx-2 my-3" variant="primary" onClick={() => setCard(FantasyBooks)}>fantasy</Button>
        <Button className="mx-2 my-3" variant="warning" onClick={() => setCard(HystoryBooks)}>history</Button>
        <Button className="mx-2 my-3" variant="danger" onClick={() => setCard(HorrorBooks)}>horror</Button>
        <Button className="mx-2 my-3" variant="success" >romance</Button>
        <Button className="mx-2 my-3" variant="info" >scifi</Button>
      </Container>
    </>
  );
}

export default ButtonCategory;
