import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;

  .cardWrapper {
    position: relative;
    margin: 4em 0;
    width: 100%;
    max-width: 500px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.125);

    .cardMainImage {
      height: 500px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .cardContent {
      padding: 2rem 3rem;
      text-align: left;
    }
  }
`;

export default function Details(props) {
  const { title, date, explanation, url } = props;
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <Card className='card'>
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
    </Card>
  );
}
