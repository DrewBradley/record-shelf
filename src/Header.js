import React from "react"
import NavBar from "./NavBar"
import "./Header.css"

const Header = ({nextPage, prevPage}) => {
  return (
    <section className="header-section">
      <header className="header-title">My Record Shelf</header>
      <NavBar nextPage={nextPage} prevPage={prevPage}/>
    </section>
  )
}

export default Header