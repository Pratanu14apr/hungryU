import React, { Component } from "react";
import Logo from "./Components/Navbar/Logo";
import Menu from "./Components/Navbar/Menu";
import Card from "./Components/Navbar/Card";
import Company from "./Components/Footer/Company";
import Contact from "./Components/Footer/Contact";
import Legal from "./Components/Footer/Legal";
import SocialMedia from "./Components/Footer/SocialMedia";
import ResturentNo from "./Components/Resturents/ResturentNo";
import Food from "./Components/Resturents/Food";
import "./global.css";
class App extends Component {
  render() {
    return (
      <>
        <section id="navbar">
          <article>
            <Logo />
            <Menu />
          </article>
        </section>

        <section className="cardSection">
          <Card />
        </section>
        <section id="resturent">
          <ResturentNo />
          <Food />
        </section>
        <section id="footer">
          <Company />
          <Contact />
          <Legal />
          <SocialMedia />
        </section>
      </>
    );
  }
}
export default App;
