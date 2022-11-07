import React, { Component } from 'react'
import Carrusel from './components/Carrusel'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Carrusel
          childComponents={[
            <ExampleComponentOne />,
            <ExampleComponentTwo />,
            <ExampleComponentThree />,
          ]}
        />
      </div>
    )
  }
}

export default App

class ExampleComponentOne extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
        </ul>
      </div>
    )
  }
}

class ExampleComponentTwo extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Two</li>
          <li>Two</li>
          <li>Two</li>
          <li>Two</li>
          <li>Two</li>
        </ul>
      </div>
    )
  }
}

class ExampleComponentThree extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Three</li>
          <li>Three</li>
          <li>Three</li>
          <li>Three</li>
          <li>Three</li>
        </ul>
      </div>
    )
  }
}
