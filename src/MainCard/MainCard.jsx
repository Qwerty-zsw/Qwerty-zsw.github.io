import Card from "react-bootstrap/Card";

const MainCard = (props) => {
  return (
      <div>
      <Card className="bg-dark text-light rounded-4">
        <Card.Img variant="top rounded-4" src={props.productImg} />
        <Card.Body className="text-center">
          <Card.Title>{props.TitleName}</Card.Title>
          <Card.Text>{props.Description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default MainCard;
