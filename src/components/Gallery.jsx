import { Row } from "react-bootstrap"
import Posters from "./Posters"

function Gallery() {
    return (
        <div className="mx-5">
            <Row>
                <h3>Trending Now</h3>
               
                <Posters></Posters>
            </Row> 
            <Row>
                <h3>Watch it Again</h3>
            </Row>
            <Row>
                <h3>New Releases</h3>
            </Row>
         
        </div>
            
    )
}

export default Gallery