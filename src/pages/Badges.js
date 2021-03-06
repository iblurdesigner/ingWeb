import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'

import logo from '../images/logo.png'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState( {  loading: true, error: null })

    try{
      const data = await api.badges.list();
      this.setState( { loading: false, data: data })
    } catch(error) {
      this.setState( { loading: false, error: error })
    }
  }

    render() {
      if( this.state.loading === true ) {
        return <PageLoading />
      }
      
      if( this.state.error) {
        return <PageError error={this.state.error} />;
      }
      
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logo} alt="logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                  <h1>Contactos</h1>
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className='btn btn-primary'>Nuevo registro</Link>
                    </div>

                    <BadgesList badges={this.state.data} />
                </div>
            </React.Fragment>
        )
    }
}

export default Badges