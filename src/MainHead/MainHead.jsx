import "./MainHead.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoSearchCircleOutline } from "react-icons/io5";
import { LinkContainer } from "react-router-bootstrap";

const MainHead = () => {
  return (
    <>
      <Navbar bg="transparent" expand="sm">
        <Container fluid className="text-white">
          <Navbar.Brand className="cusLog2 text-white" href="#">
            MasterGame
          </Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex inpStyle position-relative mx-auto">
              <a className="SearchIcon text-black" href="#">
                <IoSearchCircleOutline className="fs-2 position-absolute icon" />
              </a>
              <Form.Control
                type="search"
                placeholder="دنبال چه چیزی هستید؟"
                className="d-flex rounded-4 pe-5 py-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <NavDropdown
                className="fw-bold"
                title="آموزش ها"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item className="fw-bold" href="#action3">
                  MMORPG
                </NavDropdown.Item>
                <NavDropdown.Item className="fw-bold" href="#action4">
                  FPS
                </NavDropdown.Item>
                <NavDropdown.Item className="fw-bold" href="#action5">
                  OFFLINE
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="login">
              <Nav.Link className="bg-white text-black fw-bold cusLog">
                ورود
              </Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHead;
