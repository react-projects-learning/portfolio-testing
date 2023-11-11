import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieState } from "../movieState";
import styled from "styled-components";
import { ImageContainer, SectionContainer } from "../globalStyles";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      const movies = MovieState();
      setMovie(movies.find((m) => m.url.includes(id)));
    }
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <MovieImageAndTitle>
            <img src={movie.mainImg} alt="movie" />
            <div>
              <h2>{movie.title}</h2>
              <p>lorem ipsum is simply dummy text industry</p>
            </div>
          </MovieImageAndTitle>
          <SectionContainer>
            <ImageContainer>
              <img src={movie.secondaryImg} alt="secondary" />
            </ImageContainer>
            <MovieAwards>
              {movie.awards.map(({ title, description }) => (
                <Award key={title}>
                  <h3>{title}</h3>
                  <p>lorem ipsum text</p>
                  <Line />
                  <p>{description}</p>
                </Award>
              ))}
            </MovieAwards>
          </SectionContainer>
        </>
      )}
    </>
  );
};

const MovieImageAndTitle = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    position: absolute;
    top: 50vh;
    width: 100%;

    h2,
    p {
      text-align: center;
    }
  }
`;

export const MovieAwards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: space-between;
`;

export const Award = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  p {
    padding-bottom: 0;
  }
  /* 
  h3 {
    font-size: 2rem;
  } */
`;

export const Line = styled.div`
  height: 0.3rem;
  background: #23d997;
  width: 100%;
`;

export default MovieDetail;
