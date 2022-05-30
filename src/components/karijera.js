import { Link } from "react-router-dom";
import Inter from "./inter.jpg";
import Atalanta from "./atalanta.jpg";
import AEK from "./aek.jpg";

export default function karijera() {
  return (
    <div className="karijera">
      <h2>Karijera</h2>
      <p className="pocetak_karijere">
        Osim za Hajduk Marko je igrao svudgje po Europi. Igrao je u : Italiji,
        Španjolskoj, Grčkoj, ... Nakon juniora u Hajduku odlazi u Europska
        putovanja, a prvo u Italiju točnije Milano.
        <br />
        <br />
        <Link to="/prijava">
          Prijava za saznati jos vise informacija o Livaji i njegovom zivotu
        </Link>
        <br />
        <br />
        <Link to="/">povratak na naslovnu</Link>
      </p>
      <h2 className="naslovi">Inter Milan</h2>
      <p className="tekst">
        Kasnije tijekom 2010. Livaja je prodan Inter Milanu. Iduće godine Inter
        ga je posudio švicarskom Luganu. Nakon završetka posudbe posuđen je
        talijanskoj Ceseni tijekom ljeta 2011. Svoj ligaški debi za Cesenu
        ostvario je 16. listopada 2011. protiv Fiorentine. Livaja je za Cesenu
        igrao u seniorskoj i juniorskoj momčadi. U siječnju 2012. Cesena ga je
        djelomično prodala Interu za 2,25 milijuna eura. Svoj prvi nastup za
        prvu momčad Intera ostvario je u utakmici 1. kola sezone 2012./13.
        protiv Pescare, a prvu put je bio dio početnog sastava Intera za
        utakmicu protiv Rome u siječnju 2013. Tijekom prve polovice sezone
        nastupao je u ukupno šest ligaških utakmica u kojima je zabio nula
        golova.
      </p>
      <img src={Inter} className="inter"></img>
      <br />
      <h2 className="naslovi">Atalanta</h2>
      <p className="tekst">
        Dana 31. siječnja 2013. Livaja je posuđen Atalanti te je Inter zadržao
        polovicu prava na registraciju Livaje. Inter je platio 1,5 milijuna eura
        kako bi otkupio dio ugovora od Cesene, ali je preprodao polovicu
        njegovih prava Atalanti za 2,5 milijuna eura kao dio dogovora oko
        Ezequiela Schelotta za 6 milijuna eura. Livaja je za Atalantu debitirao
        protiv Catanije 10. veljače 2013. godine, a prva dva pogotka postigao je
        u utakmici 26. kola protiv Rome.
      </p>
      <img src={Atalanta} className="inter"></img>
      <br />
      <h2 className="naslovi">AEK</h2>
      <p className="tekst">
        Dana 1. srpnja 2017. godine Livaja je posuđen AEK-u, za iznos od 200.000
        eura uz mogućnost kupnje za 1,8 milijuna eura tijekom ljeta 2018.
        Debitirao je 25. srpnja 2017. u domaćem porazu od CSKA iz Moskve (0:2) u
        prvoj utakmici trećeg pretkola Lige prvaka. Uprava AEK-a odlučila je na
        ljeto 2018. godine otkupiti Livaju koji je do tada bio na posudbi iz Las
        Palmasa, jer se odlično uklopio u momčad iskusnog španjolskog trenera
        Manola Jiméneza i postigao je 10 pogodaka u 37 službenih utakmica AEK-a
        u svim natjecanjima. Potpisao je ugovor do ljeta 2021. godine, uz
        klauzula o otkupu koja je iznosila 10 milijuna eura.
      </p>
      <img src={AEK} className="inter"></img>
      <br />
      <br />
    </div>
  );
}
