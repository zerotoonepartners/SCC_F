import react, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './scss/remote.scss';
function Remote({ remoteMenu }) {
  return (
    <>
      <div className="remoteWrapper">
        {remoteMenu.map((item, index) => {
          return (
            <div className="remoteItem" key={index}>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Remote;
