import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Hiperveza extends Component {
  state = {
    ime: "",
    prezime: "",
    lozinka: "",
    datum: "",
    mail: "",
    lozinka: ""
  };

  onSubmit = () => {
    console.log("popunjena prijava");
  };

  render() {
    return (
      <div>
        <h3>Privaja za saznat vise informacija o Livaji</h3>
        <form>
          <input
            placeholder="ime"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />
          <br />
          <br />
          <input
            placeholder="prezime"
            value={this.state.prezime}
            onChange={(e) => this.setState({ prezime: e.target.value })}
          />
          <br />
          <br />
          <input
            placeholder="datum rođenja"
            value={this.state.datum}
            onChange={(e) => this.setState({ datum: e.target.value })}
          />
          <br />
          <br />
          <input
            placeholder="mail"
            value={this.state.mail}
            onChange={(e) => this.setState({ mail: e.target.value })}
          />
          <br />
          <br />
          <input
            placeholder="lozinka"
            value={this.state.lozinka}
            onChange={(e) => this.setState({ lozinka: e.target.value })}
          />
          <br />
          <br />
          <button onClick={() => this.onSubmit()}>Prijava</button>
        </form>
        <br />
        <Link to="/">povratak na početnu</Link>
        <br />
        <br />
      </div>
    );
  }
}

export default Hiperveza;
