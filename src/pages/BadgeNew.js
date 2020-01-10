import React from 'react';

import './styles/BadgeNew.css'
import hero from '../images/hero.jpg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Tabla from '../components/Tabla'

import api from '../api'
import PageLoading from '../components/PageLoading';


class BadgeNew extends React.Component {

    constructor(props){
        super(props)

        this.state= ({
            db: [],
            loading: false,
            error: null,
            form:{
                firstName: '',
                lastName: '',
                mail: '',
                address: '',
                nacionalidad: '',
                cedula: '',
                talleres: [],
                curso: '',
                // avatarUrl: '', 
            }
        })

        this.exibirEventos()
    }

    exibirEventos() {
        fetch("http://localhost:8888/turismo/src/api/index.php")
        .then( (response) =>response.json() )
        .then( (responseJson) => {
            this.setState({
                db: responseJson
            })

            console.log(this.state.db)
        })
    }

    handleChange = e => {
        this.setState ({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true,  error: null })

        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false,  error: error })
        }
    }

    render() {

        if(this.state.loading) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div>
                    <img className="img-fluid" src={hero} alt="logo" />
                </div>

                <div className="container separacion">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <h1>Registro</h1>
                            <h5>Costo de inscripción $50</h5>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                        
                        <div className="col-sm-12 col-lg-6">
                            <Badge
                                firstName={this.state.form.firstName || 'NOMBRES'}
                                lastName={this.state.form.lastName || 'APELLIDOS'}
                                mail={this.state.form.mail || 'CORREO'}
                                address={this.state.form.address || 'DIRECCION'}
                                nacionalidad={this.state.form.nacionalidad || 'NACIONALIDAD'}
                                cedula={this.state.form.cedula || 'CEDULA'}
                                talleres={this.state.form.talleres || 'TALLERES'}
                                curso={this.state.form.curso || 'CURSO'}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-9">
                            <Tabla arrayEventos={this.state.db}/>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }        
}

export default BadgeNew;