import Livaja from "./livaja.jpg";
import Livaja_2 from "./glavna.jpg";
import { Link } from "react-router-dom";

export default function glavna() {
  return (
    <div className="glavna">
      <h2>Marko Livaja</h2>
      <p>
        Marko Livaja hrvatski je nogometaš koji igra na poziciji napadača.
        Trenutačno igra za Hajduk Split.
      </p>
      <br />
      <img src={Livaja} className="glavna_slika"></img>
      <br />
      <p className="pocetak">
        Livaja je nogometnu karijeru započeo u niželigaškim klubovima GOŠK-u iz
        Kaštel Gomilice i Omladincu iz Vranjica. U ljeto 2008. dobio je poziv
        Dinama. No, prije nego što je bio registriran kao igrač Dinama, dobio je
        poziv Hajduka iz njegovog rodnog grada – Splita. Na kraju je prešao u
        Hajduk. Početkom 2010. priključen je prvoj momčadi splitskog Hajduka.
        <br />
      </p>
      <Link to="/karijera" className="link_1">
        Vise o karijeri
      </Link>
      <br />
      <h3>Povratak na Poljud</h3>
      <p>
        Nakon odlaska u Europu i provedenih sezona u Europi vraća se u Hajduk
        2021.godine.
        <br />
        Nakon šta mu je istekao ugovor, cijeli Split i Hrvatska je pokrenula
        akciju sa imenom #LivajaOstani i bila je uspješna.
        <br />
        <br />
        <img src={Livaja_2}></img>
        <br />
        <br />
        Nakon toga je zavladala euforija u Splitu i nada da nakon 17.g mozemo
        osvojit titulu prvaka Hrvatske i izboriti grupu u Europi.
        <br />
        Nakon ostanka Livaje počeli su dolazit mnoga zvučna imena poput
        Krovinovića, Kalinića , ...
      </p>
      <br />
      <br />
      <Link to="/roditelj">Informacije o livaji</Link>
      <br />
      <br />
    </div>
  );
}
