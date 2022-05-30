import Slika from "./nagrade.jpg";
import { Link } from "react-router-dom";

export default function Ostalo({ salji }) {
  return (
    <div className="App">
      <h2>Najvaznije informacije, nagrade i zanimljivosti:</h2>
      <table className="tablica">
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Datum rođenja</th>
          <th>Mjesto rođenja</th>
          <th>Posao</th>
          <th>Pozicija</th>
        </tr>
        <tr>
          <td>{salji.ime}</td>
          <td>{salji.prezime}</td>
          <td>{salji.datum_rođenja}</td>
          <td>{salji.mjesto_rođenja}</td>
          <td>{salji.posao}</td>
          <td>{salji.pozicija}</td>
        </tr>
      </table>

      <h3>Individualne nagrade</h3>
      <p>
        Član momčadi sezone Grčke Superlige:2017./18., 2019./20.
        <br />
        Igrač sezone Grčke Superlige: 2019./20.
        <br />
        Najbolji igrač Prve HNL prema izboru kapetana klubova Prve HNL: 2021.
        <br />
        Član momčadi sezone HNL: 2021./22.
        <br />
        Najbolji igrač sezone Prve HNL: 2021/2022.
        <br />
        Najbolji strijelac sezone Prve HNL: 2021/2022.
      </p>
      <img src={Slika} className="nagrada"></img>
      <p className="nagrada_1">Marko Livaja sa nagradom</p>
      <h3>Zanimljivost</h3>
      <p>Splitska glazbena grupa Disconnect izdala je pjesmu Marko Livaja.</p>
      <br />
      <Link to="/">povratak na naslovnu stranicu</Link>
      <br />
      <br />
    </div>
  );
}
