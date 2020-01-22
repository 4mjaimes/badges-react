import React from 'react';
import confLogo from '../assets/img/badge-header.svg';
import '../assets/styles/Badge.css';

class Badge extends React.Component{
     render(){
          return(
          <div className="Badge">
              <div className="Badge__header">
                  <img src={confLogo} alt="Logo de la conferencia"/>
              </div>

              <div className="Badge__section-name">
                <img className="Badge__Avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                <h1>Manuel <br/> Jaimes </h1>
              </div>
            
            <div className="Badge__section-info">
                <h3>Ingeniero de sistemas</h3>
                <div>@4mjaimes</div>
            </div>

            <div className="Badge__footer">
                #BucaraConf
            </div>
          </div>
          )
     }
};

export default Badge;
