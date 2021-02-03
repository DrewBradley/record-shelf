import React from "react"

const NavBar = ({nextPage, prevPage}) => {
  return(
    <div className="navbar">
      <button onClick={() => prevPage()} >Previous Page</button>
      <button onClick={() => nextPage()} >Next Page</button>
    </div>
  )
}

export default NavBar