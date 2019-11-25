import PropTypes from "prop-types"
import React from "react"

const TimeTable = () => (
  <div>
    <h1>Aikataulu</h1>

    <div>
      <h2>Super Smash Bros. Ultimate</h2>
      <table>
        <tr>
          <td>11:00</td>
          <td>Wave A</td>
        </tr>
        <tr>
          <td>12:30</td>
          <td>Wave B</td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Top 8</td>
        </tr>
        <tr>
          <td>18:00</td>
          <td>Finaalit</td>
        </tr>
      </table>
    </div>
    <div>
      <h2>Counter-Strike: Global Offensive</h2>
      <table>
        <tr>
          <td>11:00</td>
          <td>Joukkue 1 - Joukkue 2 (Vanajasali)</td>
        </tr>
        <tr>
          <td>11:00</td>
          <td>Joukkue 3 - Joukkue 4 (Yläkerta)</td>
        </tr>
        <tr>
          <td>12:30</td>
          <td>Joukkue 5 - Joukkue 6 (Vanajasali)</td>
        </tr>
        <tr>
          <td>12:30</td>
          <td>Joukkue 7 - Joukkue 8 (Yläkerta)</td>
        </tr>
        <tr>
          <td>13:30</td>
          <td>Voittaja 1 - Voittaja 2 (Vanajasali)</td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Voittaja 3 - Voittaja 4 (Vanajasali)</td>
        </tr>
        <tr>
          <td>15:30</td>
          <td>Finaali (Paras kolmesta)</td>
        </tr>
      </table>
    </div>
  </div>
)

export default TimeTable
