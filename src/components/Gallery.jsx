import { Row } from "react-bootstrap"

import Posters2 from "./Posters2"
import Posters3 from "./Posters3"
import Posters1 from "./Posters1"

function Gallery() {
    return (
        <div className="mx-5">
            <Row>
                <h3>Trending Now</h3>
               
                <Posters1></Posters1>
            </Row> 
            <Row>
                <h3>Watch it Again</h3>
                <Posters2></Posters2>
            </Row>
            <Row>
                <h3>New Releases</h3>
                <Posters3></Posters3>
            </Row>
         
        </div>
            
    )
}

export default Gallery