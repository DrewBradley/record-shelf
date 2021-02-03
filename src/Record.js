import React from "react"

const Record = (props) => {
  return(
    <div className="record">
      {/* <img src={props.basic_information} /> */}
      {/* <a target="_blank" href={props.link}> */}
        <h1>{props.title}</h1>
        <h2>by {props.artist}</h2>
      {/* </a> */}
    </div>
  )
}

export default Record