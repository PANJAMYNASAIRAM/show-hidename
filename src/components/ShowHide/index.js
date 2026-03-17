import {Component} from 'react'
import './index.css'

class Fullname extends Component {
  state = {conditionone: false, conditiontwo: false}

  hideone = () => {
    this.setState(prevstate => ({conditionone: !prevstate.conditionone}))
  }

  hidetwo = () => {
    this.setState(prevstate => ({conditiontwo: !prevstate.conditiontwo}))
  }

  render() {
    const {conditionone, conditiontwo} = this.state

    const hideone = conditionone ? (
      <div className="contone">
        <p className="paraone">Kashireddy</p>
      </div>
    ) : null

    const hidetwo = conditiontwo ? (
      <div className="conttwo">
        <p className="paratwo">VijendraReddy</p>
      </div>
    ) : null

    return (
      <div className="container">
        <h1 className="head">Show/Hide</h1>

        <div className="containertwo">
          <div className="divone">
            <button className="butone" onClick={this.hideone}>
              Show/Hide Firstname
            </button>
            {hideone}
          </div>

          <div class="divtwo">
            <button className="buttwo" onClick={this.hidetwo}>
              Show/Hide Lastname
            </button>
            {hidetwo}
          </div>
        </div>
      </div>
    )
  }
}

export default Fullname
