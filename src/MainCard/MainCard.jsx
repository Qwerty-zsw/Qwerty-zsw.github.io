import "./MainCard.css"
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  return (
      <>
      <Link to={"/CSGO"}>
      <Card className="bg-dark text-light rounded-custom max-h">
        <Card.Img variant="top rounded-custom rounded-bottom" src={props.productImg} />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold">{props.TitleName}</Card.Title>
          <Card.Text className="fw-bold">{props.Description}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </>
  );
};
export default MainCard;
