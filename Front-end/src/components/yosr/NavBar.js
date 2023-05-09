import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logotravel from '../../assets/img/logotravel.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
   BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <></>
    // <Router>
    //   <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    //     <Container>
    //       <Navbar.Brand href="/">
    //         <img class="logo"src={logotravel} alt="Logo" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav">
    //         <span className="navbar-toggler-icon"></span>
    //       </Navbar.Toggle>
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ms-auto">
    //           <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
    //           <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Overview</Nav.Link>
    //           <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Blogs</Nav.Link>
    //         </Nav>
    //         <span className="navbar-text">
             
    //           <HashLink to='#connect'>
    //             <button className="vvd"><span>Send Reclamation</span></button>
    //           </HashLink>
    //         </span>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </Router>
  )
}
