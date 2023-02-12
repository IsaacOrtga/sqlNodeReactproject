import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function ColorSchemesExample({user}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='ms-5' href="/">Plans</Navbar.Brand>
          <Nav className="ms-5 p-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Schedule">Eventos</Nav.Link>
          </Nav>
        </Container>
          {user ? <Nav className='ms-auto'><Nav.Link href="/dashboard">{user}</Nav.Link></Nav>
            :     
             <div className='me-5'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Acceder como usuario
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/user">Acceder</Dropdown.Item>
                <Dropdown.Item href="/newuser">Registrarse</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          }

{localStorage.getItem('email') ? <Nav className='ms-2' ><Nav.Link href='/'>Log-out</Nav.Link></Nav> : ''}



      </Navbar>
      <br />
      <br />

    </>
  );
}

export default ColorSchemesExample;