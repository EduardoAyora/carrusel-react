import React, { Component } from 'react'
import './Carrusel.css'

export default class Carrusel extends Component {
  state = {
    indiceDeComponenteMostrado: 0,
  }

  ultimoIndiceDeComponente = this.props.childComponents.length - 1

  clicDerecha = () => {
    if (
      this.state.indiceDeComponenteMostrado === this.ultimoIndiceDeComponente
    ) {
      this.setState({
        indiceDeComponenteMostrado: 0,
      })
    } else {
      this.setState({
        indiceDeComponenteMostrado: this.state.indiceDeComponenteMostrado + 1,
      })
    }
  }

  clicIzquierda = () => {
    if (this.state.indiceDeComponenteMostrado === 0) {
      this.setState({
        indiceDeComponenteMostrado: this.ultimoIndiceDeComponente,
      })
    } else {
      this.setState({
        indiceDeComponenteMostrado: this.state.indiceDeComponenteMostrado - 1,
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <button className='button left' onClick={this.clicIzquierda}>
          iz
        </button>
        {this.props.childComponents[this.state.indiceDeComponenteMostrado]}
        <button className='button right' onClick={this.clicDerecha}>
          der
        </button>
      </div>
    )
  }
}
