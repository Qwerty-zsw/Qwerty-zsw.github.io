import "./MainCard.css"
import Card from "react-bootstrap/Card";

const MainCard = (props) => {
  return (
      <>
      <Card className="bg-dark text-light rounded-custom max-h">
        <Card.Img variant="top rounded-custom rounded-bottom" src={props.productImg} />
        <Card.Body className="text-center">
          <Card.Title>{props.TitleName}</Card.Title>
          <Card.Text>{props.Description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default MainCard;
