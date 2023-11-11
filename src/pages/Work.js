import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieState } from "../movieState";

const Work = () => {
  return (
    <WorkContainer>
      {MovieState().map(({ secondaryImg, title, url }) => (
        <Movie key={title}>
          <h2>{title}</h2>
          <LineSeperator />
          <div>
            <Link to={url}>
              <img src={secondaryImg} alt={title} />
            </Link>
          </div>
        </Movie>
      ))}
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  /* background: #fff;
  color: #000; */
  padding: 5rem 10rem;
  min-height: 90vh;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const LineSeperator = styled.div`
  height: 0.3rem;
  width: 100%;
  background: #ccc;
  margin-bottom: 2.75rem;
`;

export default Work;
