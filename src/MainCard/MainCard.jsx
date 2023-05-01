import "./MainCard.css";
import Card from "react-bootstrap/Card";

const MainCard = (props) => {
  return (
    <>
        <Card className="bg-dark text-light rounded-custom max-h TextInp">
          <Card.Img
            variant="top rounded-custom rounded-bottom"
            src={props.productImg}
          />
          <Card.Body className="text-center">
            <Card.Title className="fw-bold smallTitle">
              {props.TitleName}
            </Card.Title>
            <Card.Text className="fw-bold smallCus">
              {props.Description}
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  );
};
export default MainCard;
