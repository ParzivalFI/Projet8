import React from 'react'
import "./Menu.scss"
import Apartementdesciption from './Apartementdesciption'
function Menu() {
  return (
    <div className='apartement'>
      <div>
        <img src="https://picsum.photos/1240/415"
          alt="" />
      </div>
      <div className="apartementHeader">
        <div className="lestag">
          <h1>dqqsfvvvv</h1>
          <h2>sfdsfsd</h2>
          <div className="spantag">
            <span>tata</span>
            <span>dsd</span>
            <span>qd</span>
          </div>
        </div>
        <div className='apartement-owner'>
          <div className="pseudo">
            <h3><span>qsdd</span> <span>dqzd</span></h3>
            <div className='apartementBadge'></div></div>
          <div className='apartementEtoile'>
            <span className='on'>☆</span>
            <span className='on'>☆</span>
            <span className='on'>☆</span>
            <span className='off'>☆</span>
            <span className='off'>☆</span>
          </div>
        </div>
      </div>
      <div className="deux">
      <Apartementdesciption />
      <Apartementdesciption />
</div>
    </div>
  )
}

export default Menu