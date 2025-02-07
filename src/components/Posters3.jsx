import { Component } from "react";

class Posters3 extends Component{

    state= {
        imgPosters: []
    }

    fetchPoster = ()=>{
        fetch("http://www.omdbapi.com/?s=narnia&apikey=57fbf96c")
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
                {this.state.imgPosters.map(Posters3 => {
                    return(
                        <img key={Posters3.imdbID} src={Posters3.Poster} style={{height:"25rem", margin:"10px"}} />
                    )
                })}
            </div>
        )
    }
}

export default Posters3