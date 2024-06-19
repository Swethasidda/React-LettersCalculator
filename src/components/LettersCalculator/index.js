// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    // console.log(event.target.value)
    // console.log(count)
  }

  render() {
    const {count} = this.state
    return (
      <div className="big-container">
        <div className="small-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="input">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the pharse"
            className="placeholder"
            id="input"
            onChange={this.onCount}
          />
          <p className="button">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
