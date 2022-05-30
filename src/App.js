import "./styles.css";
import Glavna from "./components/glavna";
import Karijera from "./components/karijera";
import Prijava from "./components/Prijava";
import Header from "./components/Header";
import Roditelj from "./components/Roditelj";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Glavna />}></Route>
          <Route path="/karijera" element={<Karijera />}></Route>
          <Route path="/prijava" element={<Prijava />}></Route>
          <Route path="/roditelj" element={<Roditelj />}></Route>
        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}
