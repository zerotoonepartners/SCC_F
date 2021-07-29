import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
  <Carousel autoPlay>
    <div className="sliderDiv">
      <img
        className="slider"
        alt=""
        src="https://images.unsplash.com/photo-1610593250734-2c03ea85b99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <p className="legend">ISO9001</p>
    </div>

    <div>
      <img
        className="slider"
        alt=""
        src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <p className="legend">ISO14001</p>
    </div>
    <div>
      <img
        className="slider"
        alt=""
        src="https://images.unsplash.com/photo-1603517432573-707d595ef8ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <p className="legend">ISOxxxx</p>
    </div>
    <div>
      <img
        className="slider"
        alt=""
        src="https://images.unsplash.com/photo-1555540431-686184a45193?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <p className="legend">ISOxxxx4</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1610593250734-2c03ea85b99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <p className="legend">ISOxxxx2</p>
    </div>
    <div>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1610593250734-2c03ea85b99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <p className="legend">ISOxxxx6</p>
    </div>
  </Carousel>
);
