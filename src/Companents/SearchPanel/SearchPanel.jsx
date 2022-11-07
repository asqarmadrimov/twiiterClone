import React, { Component } from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      term: ''
    } 
    this.onUpdeteSearch = this.onUpdeteSearch.bind(this)
  }

  onUpdeteSearch (e) {
    const term = e.target.value;
    this.setState( { term } );
    this.props.updeteSearch(term);
  }

  render() {
    return (
      <div className='app__search w-75'>
      <input 
      type="text"
      onChange={this.onUpdeteSearch}
      placeholder='Search by posts'
      className='app__search-input form-control w-100' />
    </div>
  )
}
}

export default SearchPanel