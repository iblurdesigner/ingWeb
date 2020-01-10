import React from 'react';
import logoBadge from '../images/logo.png';
import './styles/Badge.css';


class Badge extends React.Component {
    render() {
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={logoBadge} alt="logo del rest" />
                </div>

                <div className='Badge__section-name'>
                    <img
                        className="Badge__avatar"
                        email={this.props.email}
                    />    
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <div>{this.props.mail}</div>
                    <div>{this.props.address}</div>
                    <div>{this.props.nacionalidad}</div>
                    <div>{this.props.cedula}</div>
                    <div>{this.props.talleres}</div>
                    <div>{this.props.curso}</div>
                </div>

                <div className="Badge__footer">#eventoturismoloja</div>
            </div>
        )
    }
}

export default Badge;