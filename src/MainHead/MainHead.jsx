import "./MainHead.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoSearchCircleOutline } from "react-icons/io5";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { MdMenu } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useState } from "react";

const MainHead = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar bg="transparent" expand="sm">
        <Container fluid className="text-white">
          <Link to={"/"}>
            <Navbar.Brand className="cusLog2 text-white fw-bold" href="#">
              MasterGame
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle className="text-light fs-1" aria-controls="navbarScroll" onClick={handleToggle}>
          {isOpen ? <BiMenuAltLeft /> : <MdMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex position-relative mx-auto">
              <Form.Control
                type="search"
                placeholder="دنبال چه چیزی هستید؟"
                className="d-flex rounded-4 py-2 ps-5"
                aria-label="Search"
              />
              <IoSearchCircleOutline className="fs-2 icon text-black" />
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
                <Nav.Link className="bg-white text-black fw-bold cusLog">
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
