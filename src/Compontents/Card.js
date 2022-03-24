import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Details(props) {
  //Vars
  const { title, date, explanation, url } = props;
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className='card'>
      <div className='cardWrapper'>
        <div className='cardMainImage' style={backgroundStyle}></div>
        <div className='cardContent'>
          <h1>{title}</h1>
          <h4>
            Date: <time datetime={date}>{date}</time>
          </h4>
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
}
