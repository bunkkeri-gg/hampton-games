import React from "react"
import mapsStyles from "./maps.module.css"

const Maps = () => (
  <div className={mapsStyles.maps}>
    <div
      style={{
        background: "#C10089",
        color: "#fff",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>Reitit</h1>
    </div>
    <div style={{ marginLeft: "2em", marginRight: "2em" }}>
      <h2>Tapahtumapaikka</h2>
      <div
        style={{
          marginBottom: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <a href="https://goo.gl/maps/HMvdHFy6GkVAsMse9" target="__blank">
          Verkatehdas
        </a>
      </div>
      <h2>Julkinen liikenne</h2>
      <div>
        <div
          style={{
            marginBottom: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <a href="https://goo.gl/maps/zQPHvFBtjSpXcYAaA" target="__blank">
            Hämeenlinnan Juna-asema
          </a>
          <a href="https://goo.gl/maps/y3XS6LSfqf3GAkxW7" target="__blank">
            Hämeenlinnan linja-autoasema
          </a>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>Lähimmät bussipysäkit</h3>
            <div
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingLeft: "1rem",
              }}
            >
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
          </div>
        </div>
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
  </div>
)

export default Maps
