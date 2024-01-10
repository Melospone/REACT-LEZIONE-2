import { useState } from "react";
import { Button, Card} from "react-bootstrap";
import ButtonCategory from "./Button";

const LibriCard = () => {
  const [books, setCard] = useState([]);
  return (
    <>
    <ButtonCategory setCard={setCard}/>

      {books.map((book) => (
        
            <Card style={{ width: "18rem" }} key={book.asin}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
            
      ))}
    </>
  );
};

export default LibriCard;