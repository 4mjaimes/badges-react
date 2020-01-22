import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import header from "../assets/img/badge-header.svg";
import "../assets/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Manuel"
                lastName="Jaimes"
                twitter="4mjaimes"
                jobTitle="Ingeniero de Sistemas"
                avatarUrl="https://www.gravatar.com/avatar/bded0e9b24f59e5c37533df52261b886?d=identicon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
