import React from "react";
import confLogo from "../assets/img/badge-header.svg";
import "../assets/styles/Badge.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="confLogo" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__Avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#BucaraConf</div>
      </div>
    );
  }
}

export default Badge;
