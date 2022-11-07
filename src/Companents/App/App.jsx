import React from 'react'
import { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import PostAddFrom from '../PostAddFrom/PostAddFrom'
import PostList from '../PostList/PostList'
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'Hi, What is your name?', important: false, like: false, id: 1},
        {title: 'ReactJs and JavaSicript', important: false, like: false, id: 2},
        {title: 'VueJs and JavaSicript', important: false, like: false, id: 3},
      ],
      term: '',
      filter: 'all',
    } 

    this.onDlete = this.onDlete.bind(this);
    this.onItem = this.onItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.updeteSearch = this.updeteSearch.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this)
    
    this.maxId = 4;
  }

  onDlete(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      
      return {
        data: newArr,
      }
    })
  }

  onItem (name) {
    const newItem = {
      title: name,
      important: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem]

      return {
        data: newArr,
      }
    })
  }

  onToggleImportant (id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);

      const oldItem = data[index];

      const newItem = {...oldItem, important: !oldItem.important}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr,
      }
    })
  }

  onToggleLike (id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      
      const oldItem = data[index];

      const newItem = {...oldItem, like: !oldItem.like};

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  filterPosts (items, filter) {
    if(filter === "like") {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }
  
  onFilterSelect(filter) {
    this.setState({filter})
  }
  
  SearchPost(items, term) {
    if(term.toLowerCase().length === 0) {
      return items
    }

    return items.filter(item => {
      return item.title.indexOf(term) > -1
    })
  }

  updeteSearch (term) {
    this.setState({ term })
  }


  render() {
    const {data, term, filter} = this.state
    const like = data.filter(item => item.like).length;
    const allPost = data.length;

    const visiblePosts = this.filterPosts(this.SearchPost(data, term), filter);

    return (
    <div className='app'>
      <AppHeader like={like} allPost={allPost}/>
      <div className='d-flex align-items-center justify-content-center w-100 mt-2'>
        <SearchPanel updeteSearch={this.updeteSearch}/>
        <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
      </div>
      <PostList data={visiblePosts} onDlete={this.onDlete} onToggleImportant={this.onToggleImportant} onToggleLike={this.onToggleLike}/>
      <PostAddFrom onItem={this.onItem}/>
    </div>

    )
  }
}