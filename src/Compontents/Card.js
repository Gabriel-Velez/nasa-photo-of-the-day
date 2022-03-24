import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Details(props) {
  //Vars
  const { title, date, explanation, url } = props;
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='mainImage' style={backgroundStyle}></div>
        <div className='content'>
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
