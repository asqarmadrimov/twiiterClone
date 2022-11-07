import React from 'react';
import PostListItem from '../PostListItem/PostListItem';
import './PostList.css';

const PostList = ({data, onDlete, onToggleImportant, onToggleLike}) => {
  
  const elements = data.map((item) => {

    const {id, ...restItem} = item;

    return (
      <li key={id} className='list-group-item'>
        <PostListItem {...restItem} onDelet={() => onDlete(id)} onToggleImportant={() => onToggleImportant(id)} onToggleLike={() => onToggleLike(id)}/>
      </li>
    )
  })

  return (
    <ul className='app__list list-group mt-3'>
      {elements}
    </ul>
  )
}

export default PostList