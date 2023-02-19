import "./MainCard.css";
import Card from "react-bootstrap/Card";

const MainCard = (props) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.productImg} />
        <Card.Body className="text-center">
          <Card.Title>{props.TitleName}</Card.Title>
          <Card.Text>{props.Description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default MainCard;
