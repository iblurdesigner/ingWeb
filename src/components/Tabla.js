import React, { Component } from 'react'
import './styles/Tabla.css'

class Tabla extends Component{
    render(){
        return(
            <div>
                <table className="TablaEventos">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Tema</td>
                            <td>Horario</td>
                            <td>Expositor</td>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.arrayEventos.map(
                            row=>
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.tema}</td>
                                    <td>{row.horario}</td>
                                    <td>{row.expositor}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabla