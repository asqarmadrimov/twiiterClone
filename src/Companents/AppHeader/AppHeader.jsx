import React from "react";
import './AppHeader.css'

const AppHeader = ({ like, allPost }) => {

  return (
    <div className="app__header font-monospace">
      <h2 className="app__title">Asqar Madrimov</h2>
      <h5 className="app__count opacity-75">{allPost} posts, like {like}</h5>
    </div>
  )
}

export default AppHeader;