import React, { Component } from 'react'

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'like', label: 'Liked' }
    ]
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? ' btn-info' : ' btn-outline-secondary'
      return (
        <button 
        className={`btn ${clazz}`} 
        type='button' 
        onClick={() => this.props.onFilterSelect(name)} 
        key={name}>{label}</button>
      )
    })
    return (
      <div className='ms-1 d-flex'>
        {buttons}
      </div>
    )
  }
}