import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap"
import { Grid, Grid3x3 } from "react-bootstrap-icons"

function TvShows() {
    return (

        <div className="d-flex aling-items-center justify-content-between mx-5">
            <div className="d-flex">
                <h1>TV Shows</h1>
                <Dropdown>
                    <DropdownToggle variant="dark" id="dropdown-basic" style={{border:"1px solid white"}}>
                        Genres
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem href="#">Comedy</DropdownItem>
                        <DropdownItem href="#">Drama</DropdownItem>
                        <DropdownItem href="#">Thriller</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="d-flex">
                <Grid className="mx-3 fs-4"></Grid>
                <Grid3x3 className="mx-4 fs-4"></Grid3x3>
            </div>
        </div>
    )
}

export default TvShows