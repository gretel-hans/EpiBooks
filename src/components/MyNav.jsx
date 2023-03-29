import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='text-light' >
      <Container fluid>
        <Navbar.Brand href="#home"><img className='logo me-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixLh53KG7RhR2qIaqanpiMwh0Hq48icYesA&usqp=CAU" alt="Library Logo"/>EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto mx-md-0 ms-auto ms-md-auto navflex">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>

          </Nav>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;