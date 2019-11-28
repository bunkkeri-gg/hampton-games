import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/test.png"

const Header = () => (
  <header
    style={{
      background: `#2e2a2b`,
      marginBottom: `1rem`,
      paddingTop: "1rem",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img src={Logo} style={{ height: "10em" }}></img>
  </header>
)

export default Header
