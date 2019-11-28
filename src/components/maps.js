import React from "react"
import mapsStyles from "./maps.module.css"

const Maps = () => (
  <div className={mapsStyles.maps}>
    <div
      style={{
        background: "#2e2a2b",
        color: "#fff",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>Reitit</h1>
    </div>

    <h2>Julkinen liikenne</h2>
    <div
      style={{
        marginBottom: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <a href="https://goo.gl/maps/zQPHvFBtjSpXcYAaA" target="__blank">
        Hämeenlinnan Juna-asema
      </a>
      <h3>Lähimmät bussipysäkit</h3>
      <a href="https://goo.gl/maps/Em8J3whcXbqqUTMQ9" target="__blank">
        Pikkujärvi E
      </a>
      <a href="https://goo.gl/maps/SWytMkqsbcGb29wM8" target="__blank">
        Terveyskeskus I
      </a>
      <a href="https://goo.gl/maps/crCvjZ3Ngzzb1Ns49" target="__blank">
        Pikkujärvi P
      </a>
    </div>
    <h2>Kaupat</h2>
    <div
      style={{
        marginBottom: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <a href="https://goo.gl/maps/f5k85RKjWtdqtNFbA" target="__blank">
        K-Market Keinusaari
      </a>
    </div>
  </div>
)

export default Maps
