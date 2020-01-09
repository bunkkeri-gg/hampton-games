import React from "react"
import hamk from "../images/sponsors/hamk.png"
import hml from "../images/sponsors/hml.png"
import showtekniikka from "../images/sponsors/showtekniikka.png"
import sporttiveikot from "../images/sponsors/sporttiveikot.png"
import verkatehdas from "../images/sponsors/verkatehdas.png"
import vanaja from "../images/sponsors/vanaja.png"

const Sponsor = () => (
  <div>
    <div
      style={{
        background: "#312F30",
        color: "#fff",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>Yhteistyössä</h1>
    </div>
    <div style={{ marginLeft: "2em", marginRight: "2em", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center" }}>
      <img src={verkatehdas} alt="Verkatehdas" style={{width: "301px", height: "29px", margin: "10px"}}/>
      <img src={hml} alt="Hämeenlinna" style={{width: "118px", height: "118px", margin: "10px"}}/>
      <img src={vanaja} alt="Hämeenlinna-Vanaja Seurakunta" style={{width: "263px", height: "99px", margin: "10px"}}/>
      <img src={hamk} alt="HAMK" style={{width: "200px", height: "60px", margin: "10px"}}/>
      <img src={showtekniikka} alt="ShowTekniikka" style={{width: "177px", height: "51px", margin: "10px"}}/>
      <img src={sporttiveikot} alt="SporttiVeikot" style={{width: "248px", height: "37px", margin: "10px"}}/>
    </div>
  </div>
)

export default Sponsor
