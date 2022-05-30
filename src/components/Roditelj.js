import Ostalo from "./Ostalo";

export default function stranicaProps() {
  const informacije = {
    ime: "Marko",
    prezime: "Livaja",
    datum_rođenja: "26. kolovoza 1993",
    mjesto_rođenja: "Hrvatska",
    posao: "nogometaš",
    pozicija: "napadač"
  };
  return (
    <div className="info">
      <Ostalo salji={informacije} />
    </div>
  );
}
