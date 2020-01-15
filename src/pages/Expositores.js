import React, { Component } from 'react'

import expo01 from '../images/ponente01.png'
import expo02 from '../images/ponente02.png'
import expo03 from '../images/ponente03.png'
import expo04 from '../images/ponente04.png'
import expo05 from '../images/ponente05.png'
import expo06 from '../images/ponente06.png'

class Expositores extends Component {
    render() {
        return (
            <div className="container">
                <h1 tabIndex="0">Expositores</h1>
                <h4 tabIndex="0">Conoce a los expositores de esta tercera entrega</h4>
                
                <div className="row">
                    <div className="col-sm-2 col-md-4">
                        <img src={expo01} alt="expositor 01"/>
                        <strong><br />María José Alvarez-Pallete</strong>
                        <h6 tabIndex="0">Presidente de TurisTy</h6>
                    </div>
                    
                    <div className="col-sm-2 col-md-4">
                        <img src={expo02} alt="expositor 02"/>
                        <strong tabIndex="0"><br />Federica Peluche</strong>
                        <h6 tabIndex="0">Senior Research Scientist, Telenor</h6>
                    </div>

                    <div className="col-sm-2 col-md-4">
                        <img src={expo03} alt="expositor 03"/>
                        <strong tabIndex="0"><br />Oscar González de Dios</strong>
                        <h6 tabIndex="0">Head of Transport Network</h6>
                    </div>
                </div>
                
                <div className="row separacion">
                    <div className="col-sm-2 col-md-4">
                        <img src={expo04} alt="expositor 04"/>
                        <strong tabIndex="0"><br />Andrés Escribano</strong>
                        <h6 tabIndex="0">Director IoT new connectivities</h6>
                    </div>
                    
                    <div className="col-sm-2 col-md-4">
                        <img src={expo05} alt="expositor 05"/>
                        <strong tabIndex="0"><br />Vivi Gaitan</strong>
                        <h6 tabIndex="0">Head of Video Processing and Delivery</h6>
                    </div>

                    <div className="col-sm-2 col-md-4">
                        <img src={expo06} alt="expositor 06"/>
                        <strong tabIndex="0"><br />Marishka Reactsky</strong>
                        <h6 tabIndex="0">CEONetwork Virtualization Innovation</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Expositores