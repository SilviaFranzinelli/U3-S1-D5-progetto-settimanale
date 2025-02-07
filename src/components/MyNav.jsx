import { Container, Nav, Navbar, } from "react-bootstrap"
import { Bell, PersonCircle, Search } from "react-bootstrap-icons"

function MyNav() {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container className="container-fluid">
                <img src="src\assets\netflix_logo.png"  style={{width:"130px" }}></img>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
                    <Nav className="me-auto">
                        <Nav.Link href="#"  style={{color:"white"}}>Home</Nav.Link>
                        <Nav.Link href="#"  style={{color:"white"}}>TV Shows</Nav.Link>
                        <Nav.Link href="#"  style={{color:"white"}}>Movies</Nav.Link>
                        <Nav.Link href="#"  style={{color:"white"}}>Recently Added</Nav.Link>
                        <Nav.Link href="#"  style={{color:"white"}}>My List</Nav.Link>
                    </Nav>
                    <Nav className="d-flex align-items-center ">
                        <Search className="mx-3 fs-5"></Search>
                        <Nav.Link href="#" className="mx-3 fs-5" style={{fontWeight:"bold", color:"white"}} >KIDS</Nav.Link>
                        <Bell className="mx-3 fs-5"></Bell>
                        <PersonCircle className="mx-3 fs-5"></PersonCircle>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav

   