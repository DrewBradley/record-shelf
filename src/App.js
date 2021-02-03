import React from "react"
import Record from "./Record"
import './App.css';
import Header from "./Header"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      recordCollection: []
    }
  }

componentDidMount() {
  fetch("https://api.discogs.com//users/DrewBradley/collection/folders/0/releases?page=1&per_page=50")
    .then(response => response.json())
    .then(data => this.setState({recordCollection: data.releases}))
    .catch(error => console.log(error))
}

  render() {
    const records = this.state.recordCollection.map(record => {
      return <Record 
      key={record.id} 
      link={record.basic_information.master_url} 
      artist={record.basic_information.artists[0].name} 
      title={record.basic_information.title}/>
    })
    return (
      <div className="App">
        <Header />
        <div className="record-grid">
          { !this.state.recordCollection ? <h1 className="loading">LOADING...</h1> : records }
        </div>
      </div>
    )      
    }
  
}

export default App;
