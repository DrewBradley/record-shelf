import React from "react"
import Record from "./Record"
import './App.css';
import Header from "./Header"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      url: "https://api.discogs.com/users/DrewBradley/collection/folders/0/releases?key=XCoBKpyLqjFhJXxBfsqM&secret=ANrZFtLrARjnFXzMRHdQcpEpJPvErVfn",
      urlNext: "",
      urlPrev: "",
      error: "",
      recordCollection: [],
      currentAlbum: "",
      showDeets: false,
    }
  }

componentDidMount() {
  this.getRecords(this.state.url)
}

getRecords(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      recordCollection: data.releases,
      urlNext: data.pagination.urls.next,
      urlPrev: data.pagination.urls.prev,
      error: null}))
    .catch(error => this.setState({ error: "No more pages!" }))
}

getNextPage = () => {
  this.getRecords(this.state.urlNext)
}

getPrevPage = () => {
  this.getRecords(this.state.urlPrev)
}

getAlbumDeets = (url, img) => {
  fetch(url)
    .then(response => response.json())
    .then(data => this.displayDeets(data, img))
}

displayDeets = (data, img) => {
  const tracklist = data.tracklist.map(song => song.title)
  this.setState({
    showDeets: true,
    currentAlbum: {
      image: img,
      artist: data.artists[0].name,
      title: data.title,
      tracks: tracklist
    }
  })
}

hideDeets = () => {
  this.setState({
    showDeets: false
  })
}

  render() {
    const records = this.state.recordCollection.map(record => {
      return <Record 
      key={record.id} 
      showDeets={this.getAlbumDeets}
      img={record.basic_information.cover_image}
      link={record.basic_information.resource_url} 
      artist={record.basic_information.artists[0].name} 
      title={record.basic_information.title}/>
    })
    return (
      <div className="App">
        <Header nextPage={this.getNextPage} prevPage={this.getPrevPage}/>
        {!this.state.recordCollection.length && 
        <h1 className="loading">LOADING...</h1>}
        {this.state.showDeets  && 
        <div className="record-prev"
        onClick={this.hideDeets}>
          <h1>{this.state.currentAlbum.artist}</h1>
          <h1>{this.state.currentAlbum.title}</h1>
          <img src={this.state.currentAlbum.image} />
          <div>{this.state.currentAlbum.tracks.map(track => <p>{track}</p>)}</div>
        </div>}
        <div className="record-grid">
          { records }
        </div>
        {this.state.error &&
        <h1 
          onClick={this.getRecords(this.state.url)} className="error">{this.state.error}</h1>
        }
      </div>
    )      
    }
  
}

export default App;
