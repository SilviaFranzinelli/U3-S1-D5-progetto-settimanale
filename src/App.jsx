
import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import MyNav from './components/MyNav'
import TvShows from './components/TvShows'


function App() {
  

  return (
    <div className="bg-dark text-white">
      <MyNav></MyNav>
      <TvShows></TvShows>
      <Gallery></Gallery>
      <hr></hr>
      <Footer></Footer>
    </div>
  )
}

export default App
