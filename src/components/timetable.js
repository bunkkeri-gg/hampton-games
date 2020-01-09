import React from "react"

const TimeTable = () => (
  <div>
    <div style={{ background: "#2E66B6", color: "#fff", padding: "1rem" }}>
      <h1 style={{ margin: 0 }}>Aikataulu</h1>
    </div>
    <div style={{ marginLeft: "2em", marginRight: "2em" }}>
      <div style={{ maxWidth: `100%`, padding: `1.45rem` }}>
        <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
          <h2>Super Smash Bros. Ultimate</h2>
          <table>
            <tr>
              <td style={{ width: "30%" }}>11:00</td>
              <td>Aalto A</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>12:30</td>
              <td>Aalto B</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>14:30</td>
              <td>Top 8</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>18:00</td>
              <td>Finaalit</td>
            </tr>
          </table>
        </div>
        <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
          <h2>Counter-Strike: Global Offensive</h2>
          <table>
            <tr>
              <td style={{ width: "30%" }}>11:00</td>
              <td>Xperience Lahti - HAMK Gaming (Vanajasali)</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>11:00</td>
              <td>Matchmaker - Birkka gaming (Yläkerta)</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>12:30</td>
              <td>ValidiTaktiikka - ihaok (Vanajasali)</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>12:30</td>
              <td>Mouse Breeders - Aku Ankan taskukirja nro 347 (Yläkerta)</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>13:30</td>
              <td>Voittaja 1 - Voittaja 2 (Vanajasali)</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>14:30</td>
              <td>Voittaja 3 - Voittaja 4 (Vanajasali)</td>
            </tr>
            <tr>
              <td style={{ width: "30%" }}>15:30</td>
              <td>Finaali (Paras kolmesta)</td>
            </tr>
          </table>
        </div>
        <p style={{ color: "red", fontWeight: "500" }}>
          Aikatauluihin voi tulla muutoksia.
        </p>
      </div>
    </div>
  </div>
)

export default TimeTable
