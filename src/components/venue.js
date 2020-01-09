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
      <h1 style={{ margin: 0 }}>Tapahtumapaikka</h1>
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
        <p>Painamalla kuvaa näet sen isompana.</p>
        <h1>Ruokailu</h1>
        <p>
          Ravintola Iso Huvilasta on tarjolla Hämpton Games burger ateria
          hintaan 10€
        </p>
        <h1>Vaatesäilytys</h1>
        <p>
          Tapahtuman järjestäjä ei vastaa vaatesäilytykseen jätetyistä
          tavaroista. Vaatesäilytyksessä on kamera valvonta.
        </p>
      </div>
    </div>
  </div>
)

export default Venue
