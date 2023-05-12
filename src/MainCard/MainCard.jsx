import "./MainCard.css";
import Card from "react-bootstrap/Card";

const MainCard = (props) => {
  return (
    <>
      <Card className="bg-dark Heffect text-light rounded-custom max-h TextInp position-relative">
        <div className="overlay fs-5 text-black fw-bold d-flex justify-content-center align-items-center">
          ادامه مطلب...
        </div>
        <Card.Img
          variant="top rounded-custom rounded-bottom"
          src={(props.productImg)}
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
