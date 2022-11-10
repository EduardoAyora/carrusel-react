import React, { Component } from 'react'

export default class BotonContador extends Component {
  state = {
    contador: 0,
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contador !== this.state.contador) {
      alert(this.state.contador)
    }
  }

  render() {
    return (
      <button
        className='btn-agregar'
        onClick={() => {
          this.setState({
            contador: this.state.contador + 1,
          })
        }}
      >
        Aumentar Contador
      </button>
    )
  }
}
