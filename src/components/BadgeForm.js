import React from 'react'
// import Tabla from './Tabla'

class BadgeForm extends React.Component {
    
    // constructor(){
    //     super()

    //     this.state=({
    //         db:[]
    //     })
    //     this.exibirEventos()
    // }

    // exibirEventos() {
    //     fetch("http://localhost:3000/turismo/src/api/")
    //     .then( (response) =>response.json() )
    //     .then( (responseJson) => {
    //         this.setState({
    //             db: responseJson
    //         })

    //         console.log(this.state.db)
    //     })
    // }
    
    handleClick = e => {
        console.log("button was clicked")
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("Submit was send");
    //     console.log(this.state);
    // }

    render() {
        return(
            <div>
                <form onSubmit={ this.props.onSubmit }>
                    <div className="form-group">
                        <label arial-label="Nombres">Nombres</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}  //valores controladados
                        />
                        
                        <label arial-label="Apellidos">Apellidos</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                        
                        <label arial-label="Correo">Correo</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="mail"
                            value={this.props.formValues.mail}
                        />
                        
                        <label arial-label="Dirección">Dirección</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="address"
                            value={this.props.formValues.address}  
                        />
                        
                        <label arial-label="Nacionalidad">Nacionalidad</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="nacionalidad"
                            value={this.props.formValues.nacionalidad}  
                        />
                        
                        <label arial-label="Cédula">Cédula</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="cedula"
                            value={this.props.formValues.cedula}  
                        />
                        
                        <label arial-label="Talleres">Talleres</label>
                        <div className="form-group">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Turismo Sierra" 
                                    onChange={this.props.onChange}
                                    name="talleres"
                                    value={this.props.formValues.talleres}  
                                    />
                                <label arial-label="Turismo Sierra" class="form-check-label" for="inlineCheckbox1">Turismo Sierra</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Turismo Costa" 
                                    onChange={this.props.onChange}
                                    name="talleres"
                                    value={this.props.formValues.talleres}  
                                />
                                <label arial-label="Turismo Costa" class="form-check-label" for="inlineCheckbox2">Turismo Costa</label>
                            </div>
                        </div>
                        
                        <label arial-label="Curso">Curso</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label arial-label="Opciones" className="input-group-text" for="inputGroupSelect01">Opciones</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01"
                                onChange={this.props.onChange}
                                type="text"
                                name="curso"
                                value={this.props.formValues.curso} 
                            >
                                <option selected>Escoja...</option>
                                <option value="Básico">Básico</option>
                                <option value="Intermedio">Intermedio</option>
                                <option value="Avanzado">Avanzado</option>
                            </select>
                        </div>
                    </div> 
                    
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>

                    {this.props.error && (
                        <p className="text-danger" >{this.props.error.message}</p>
                    )}
                </form>
            </div>
        ) 
    }   
}

export default BadgeForm