import Image from "next/image";
import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";

interface IMovie {
  id: number;
  title: string;
  poster_path: string;
}

interface HomeProps {
  movies: IMovie[];
}

interface IMovieImage {
  src: string;
}

export default function Home({ movies }: HomeProps) {
  return (
    <div className="container">
      <Seo title="Home" />
      {movies.map((movie: IMovie) => (
        <div className="movie" key={movie.id}>
          <Image
            loader={({ src }: IMovieImage) =>
              `https://image.tmdb.org/t/p/w500${src}`
            }
            src={`${movie.poster_path}`}
            alt={`${movie.title}`}
            width={"100%"}
            height={"100%"}
            objectFit="contain"
            layout="responsive"
            priority={true}
          />
          <h4>{movie.title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results: movies } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      movies,
    },
  };
}
