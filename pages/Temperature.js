import React, { Component } from 'react'
import styles from '../styles/Home.module.css'

class Temperature extends Component {
  constructor(props) {
    super(props)
    this.state = { weatherItems: [] }
  }

  componentDidMount() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=${process.env.customKey}`)
        .then(response => response.json())
        .then(data => {
            this.setState({weatherItems: data["main"]})
        })
    }

    render() {
      const data = this.state.weatherItems.temp
        console.log(data)

    return (
      <div className="weather">

            <p id="bloc1">{data}</p>
            <p id="bloc2">°C</p>


      </div>
    )
  }
 }

export default Temperature
