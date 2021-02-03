import React from "react"
import NavBar from "./NavBar"
import "./Header.css"

const Header = () => {
  return (
    <section className="header-section">
      <header className="header-title">My Record Shelf</header>
      <NavBar />
    </section>
  )
}

export default Header