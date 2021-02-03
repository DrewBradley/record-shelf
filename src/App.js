import React from "react"
import Record from "./Record"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      recordCollection: []
    }
  }

componentDidMount() {
  fetch("https://api.discogs.com//users/DrewBradley/collection/folders/0/releases?page=1&per_page=270")
    .then(response => response.json())
    .then(data => this.setState({recordCollection: data.releases}))
}

  render() {
    console.log(this.state.recordCollection)
    const records = this.state.recordCollection.map(record => {
      return <Record 
          key={record.id} 
          link={record.basic_information.master_url} 
          artist={record.basic_information.artists[0].name} 
          title={record.basic_information.title}/>
      }
    )
    return (
      <div className="App">
        { records }
      </div>
    )
  }
}

export default App;
