import React, { Component } from 'react'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${process.env.customKey}`)
      .then(response => response.json())
      .then(data => {
          this.setState({items: data["weather"]})
          console.log(data)
      })
  }

  render() {
    return (
      <div className="weather">
        {this.state.items.map((item) => {
          return (
            <p id="bloc1">{item["description"]}</p>
          )
        })}
      </div>
    )
  }
}

export default Weather
