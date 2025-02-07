import { Col, Container, Row } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons"

function Footer() {
    return (
        <Container  className="pb-4"> 
            <Row className="d-flex justify-content mb-2">
                <Col>
                    <Facebook className= "fs-5 m-2"></Facebook>
                    <Instagram className= "fs-5 m-2"></Instagram>
                    <Twitter className= "fs-5 m-2"></Twitter>
                    <Youtube className= "fs-5 m-2"></Youtube>
                </Col>
                
            </Row>  
            <Row>
                <Col>
                    <p>Audio and Subtitles</p>
                    <p>Media Center </p>
                    <p> Privacy</p>
                    <p>Contact us</p>
                </Col>
                <Col>
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                </Col>
                <Col>
                    <p>Help Center</p>  
                    <p>Jobs</p>  
                    <p>Cookie Preferences</p>
                </Col>
                <Col>
                    <p>Gift Cards</p>  
                    <p>Terms of Use</p>  
                    <p>Corporate Information</p>
                </Col>
            </Row>
            <Row>
                <Col>© 1997-2023 Netflix, Inc.</Col>
            </Row>
        </Container>
       
    )
}

export default Footer