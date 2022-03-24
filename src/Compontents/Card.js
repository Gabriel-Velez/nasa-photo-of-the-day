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
      transition: 0.2s;
      &:hover {
        transform: scale(1.025);
      }
    }

    .cardContent {
      padding: 2rem 3rem;
      text-align: left;
    }
  }
`;

export default function Details(props) {
  const { title, date, explanation, url, hdurl } = props;
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <Card className='card'>
      <div className='cardWrapper'>
        <a href={hdurl} target='_blank'>
          <div className='cardMainImage' style={backgroundStyle}></div>
        </a>
        <div className='cardContent'>
          <h2>{title}</h2>
          <h4>
            Date: <time datetime={date}>{date}</time>
          </h4>
          <p>{explanation}</p>
        </div>
      </div>
    </Card>
  );
}
