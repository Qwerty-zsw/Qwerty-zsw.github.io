import "./MainHead.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import iconBG from "../../public/Main.png";
import AuthDetails from "../auth/AuthDetails";

const MainHead = ({ onSearch, searchClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Max, setMax] = useState(false);

  return (
    <>
      <Navbar className="w-100 h-100 rm-shadow py-0 my-0" expand="md">
        <Container fluid>
          <Navbar.Toggle
            className="text-light fs-1"
            aria-controls="navbarScroll"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiMenuAltRight /> : <MdMenu />}
          </Navbar.Toggle>
          <NavLink to={"/"}>
            <Navbar.Brand style={{ width: "55px" }}>
              <img className="w-100 h-100" src={iconBG} alt="Master Game" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Collapse className="body-collapse" id="navbarScroll">
            <div className="w-100 d-flex justify-content-center">
              <Form className={`position-relative fixedCenter ${searchClass}`}>
                <Form.Control
                  type="search"
                  placeholder="دنبال چه چیزی هستید؟"
                  className="rounded-5 py-2 ps-5"
                  aria-label="Search"
                  onChange={(e) => onSearch(e.target.value)}
                />
                <IoSearchCircleOutline className="fs-2 icon search-icon text-black" />
              </Form>
            </div>
            <Nav
              className={`my-2 my-lg-0 position-relative cusMax ${
                Max ? "cusOpen" : ""
              }`}
              navbarScroll
            >
              <NavDropdown
                onClick={() => setMax(!Max)}
                className="fw-bold text-center d-flex align-items-center"
                title="آموزش ها"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  className="fw-bold rounded-5 text-center"
                  href="#"
                >
                  MMORPG
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="fw-bold rounded-5 text-center"
                  href="#"
                >
                  FPS
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="fw-bold rounded-5 text-center"
                  href="#"
                >
                  OFFLINE
                </NavDropdown.Item>
              </NavDropdown>
              <AuthDetails />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHead;
