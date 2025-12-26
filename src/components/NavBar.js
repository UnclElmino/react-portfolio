import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

// Navigation bar component with scroll effect

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
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Emilio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : ''} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : ''} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : ''} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="https://docs.google.com/document/d/1YF9VYw1lxzy9Mo4eIa_ZiyV3htKdbOer/edit?usp=sharing&ouid=108570586163527687738&rtpof=true&sd=true" >{'{ Resume }'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}