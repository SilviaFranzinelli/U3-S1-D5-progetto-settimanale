import { Component } from "react";

class Posters extends Component{

    state= {
        imgPosters: []
    }

    fetchPoster = ()=>{
        fetch("http://www.omdbapi.com/?s=lord&apikey=57fbf96c")
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
                {this.state.imgPosters.map(Posters => {
                    return(
                        <img key={Posters.imdbID} src={Posters.Poster} />
                    )
                })}
            </div>
        )
    }
}

export default Posters