import "./MainHead.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoSearchCircleOutline } from "react-icons/io5";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const MainHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Max, setMax] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  
  const maxHandler = () => {
    setMax(!Max);
  };

  return (
    <>
      <Navbar className="rm-shadow py-0 my-0" expand="md">
        <Container fluid>
          <Navbar.Toggle
            className="text-light fs-1"
            aria-controls="navbarScroll"
            onClick={clickHandler}
          >
            {isOpen ? <BiMenuAltRight /> : <MdMenu />}
          </Navbar.Toggle>
          <Link to={"/"}>
            <Navbar.Brand style={{ width: "55px" }}>
              <img
                className="w-100 h-100"
                src="../../public/Main.png"
                alt="Master Game"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse className="body-collapse" id="navbarScroll">
          
            <div className="w-100 d-flex justify-content-center">
            <Form className={"position-relative fixedCenter"}>
              <Form.Control
                type="search"
                placeholder="دنبال چه چیزی هستید؟"
                className="rounded-5 py-2 ps-5"
                aria-label="Search"
              />
              <IoSearchCircleOutline className="fs-2 icon search-icon text-black" />
            </Form>
            </div>
            <Nav
              className={`my-2 my-lg-0 position-relative cusMax ${Max ? "cusOpen" : ""}`}
              navbarScroll
            >
              <NavDropdown
                onClick={maxHandler}
                className="fw-bold text-center"
                title="آموزش ها"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item className="fw-bold" href="#">
                  MMORPG
                </NavDropdown.Item>
                <NavDropdown.Item className="fw-bold" href="#">
                  FPS
                </NavDropdown.Item>
                <NavDropdown.Item className="fw-bold" href="#">
                  OFFLINE
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/ورود">
                <Nav.Link className="login100 bg-white text-black fw-bold cusLog">
                  ورود
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHead;
