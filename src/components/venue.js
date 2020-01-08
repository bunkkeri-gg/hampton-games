import React from "react"
import map from "../images/kartta.jpg"

const Venue = () => (
  <div>
    <div
      style={{
        background: "#ABC024",
        color: "#fff",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>Tapahtuma paikka</h1>
    </div>
    <div style={{ marginLeft: "2em", marginRight: "2em" }}>
      <div
        style={{
          marginBottom: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <a href={map}>
          <img src={map} alt="Kartta" />
        </a>
      </div>
    </div>
  </div>
)

export default Venue
