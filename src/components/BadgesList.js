import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />{this.props.badge.mail}
          <br />
          {this.props.badge.address}
          <br />
          {this.props.badge.nacionalidad}
          <br />
          {this.props.badge.cedula}
          <br />
          {this.props.badge.talleres}
          <br />
          {this.props.badge.curso}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {

    if(this.props.badges.length === 0) {
      return(
        <div>
          <h3>No encontramos ningun registro</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crear nuevo registro
          </Link>
        </div>
      )
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;