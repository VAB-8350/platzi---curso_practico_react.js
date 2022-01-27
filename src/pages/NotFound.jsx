import React from 'react';
import '@styles/NotFound.scss';


const NotFound = () => {
  return (
    <div className="cardNotFound">
      <h1 className="titleNotFount">404</h1>
      <h3 className="subtitleNotFount">Ooops! Not Found</h3>
      <a href="/" className="goHome">Go Home</a>
    </div>
  )
}

export default NotFound;