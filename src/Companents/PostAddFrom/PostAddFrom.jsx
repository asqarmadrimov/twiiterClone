import React, { Component } from 'react'

export default class PostAddFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onItem(this.state.text)
    this.setState({
      text: ''
    })
  }
 
  render() {
    return (
      <form className='d-flex align-items-center justify-content-between mt-3 bg-light'>
        <input onChange={this.onValueChange} value={this.state.text} type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
        <button type="submit" onClick={this.onSubmit} className="btn btn-outline-secondary">Add</button>
      </form>
    )
  }
}