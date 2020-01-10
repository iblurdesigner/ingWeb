import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import inicioImg from '../images/inicio.jpg'

class Inicio extends Component {
    render() {
        return (
            <div className="container separacion">
               <h1>Tercera edición de la Feria de Turismo en Loja</h1>
                <div className="row separacion">
                    <div className="col-sm-6">
                        <div>
                            El lunes 11 de octubre, se realizará la III Feria de Turismo en Loja  dirigida a profesionales de turismo. En el evento se reunirá a más de 30 expositores entre ellos: aerolíneas, mayoristas de turismo, rentadoras de autos, seguros de viaje, agencias de viajes y varios proveedores para ofertar y comercializar productos turísticos para clientes finales a escala nacional e internacional.
                            Esta cartera de Estado invita a la industria turística a ser parte de la feria que se llevará a cabo en el Centro de Exposiciones – Ciudad de Loja, ubicado en la Av. Amazonas, desde las 08:00 a 17:00.

                            Con el evento se busca dinamizar las actividades comerciales del gremio y promover el turismo a través de una red de contactos entre agentes y proveedores de servicios, así como posicionar la feria a escala nacional en la que se vinculan todos los actores que son parte de la industria turística.

                            El stand del ministerio de Turismo estará presente mediante la exhibición de la Región de los Andes, Costa del Pacífico y Amazonía, en el cual participarán cerca de 30 ofertantes de servicios con productos  turísticos innovadores de algunos rincones del Ecuador. Se busca motivar el desplazamiento de turistas en el país para disfrutar de una exuberante naturaleza, cultura milenaria, la aventura sin límites y la deliciosa gastronomía.

                            Asista al evento y conozca la oferta turística del»País de los Cuatro Mundos».
                        </div>
                        <div className="separacion">
                            <Link to="/badges/new" className='btn btn-primary'>Registrarse</Link>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <img src={inicioImg} alt="turismo inicio" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Inicio