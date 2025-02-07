import { Component } from "react";

class Posters2 extends Component{

    state= {
        imgPosters: []
    }

    fetchPoster = ()=>{
        fetch("http://www.omdbapi.com/?s=doctor who&apikey=57fbf96c")
        .then((resp)=> {
            if(resp.ok){
                return resp.json()
            } else {
                throw new Error("Non siamo riusciti a recuperare i film")
            }

        })
        .then((data)=>{
            console.log(data)
            this.setState({
                imgPosters: data.Search 
                .splice(0,6) 
            })
        })
        .catch((e)=> {console.log(e)})
    }

    componentDidMount(){
        
        this.fetchPoster()
    }

    render(){
        
        return (
            <div>
                {this.state.imgPosters.map(Posters2 => {
                    return(
                        <img key={Posters2.imdbID} src={Posters2.Poster} style={{height:"25rem", margin:"10px"}} />
                    )
                })}
            </div>
        )
    }
}

export default Posters2