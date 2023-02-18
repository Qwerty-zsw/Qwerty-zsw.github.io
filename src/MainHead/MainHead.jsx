import "./MainHead.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoSearchCircleOutline } from "react-icons/io5";

const MainHead = () => {
  return (
    <>
      <Navbar bg="transparent" expand="sm">
        <Container fluid>
          <Navbar.Brand className="cusLog2" href="#">MasterGame</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex inpStyle position-relative mx-auto">
                <a className="SearchIcon text-white" href="#"><IoSearchCircleOutline className="fs-2 position-absolute icon" /></a>
                <Form.Control
                  type="search"
                  placeholder="دنبال چه چیزی هستید؟"
                  className="d-flex bg-transparent rounded-4 pe-5 py-2"
                  aria-label="Search"
                />
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <NavDropdown title="آموزش ها" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">MMORPG</NavDropdown.Item>
                <NavDropdown.Item href="#action4">FPS</NavDropdown.Item>
                <NavDropdown.Item href="#action5">OFFLINE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="bg-info text-white cusLog" href="#action1">ورود</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHead;
