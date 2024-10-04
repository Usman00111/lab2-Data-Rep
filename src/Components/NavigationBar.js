import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
        // nav bar has backgorund color to dark 
        <Navbar bg="dark" data-bs-theme="dark"> 
          <Container> 
            {/* this is a container which has navbar  */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto"> 
              {/* 3 buttons called home,create and read & they will change url
              localhost300/ home or create or read depending on which you click */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;