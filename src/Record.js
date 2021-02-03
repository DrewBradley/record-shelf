import React from "react"

const Record = (props) => {
  return(
    <div onClick={() => props.showDeets(props.link, props.img)} className="record">
     <div className="background" 
      style={{
        backgroundImage: `url("${props.img}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div className="album-info">
        <h1>{props.title}</h1>
        <h2>by {props.artist}</h2>
      </div>
     </div>
    </div>
  )
}

export default Record