import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

function MoviesSection({ title, movies }) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={`${styles.movie} group`} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <div className="bg-gradient-to-t from-black w-full h-full absolute left-0 bottom-0">
                <div className="absolute inset-0 justify-center items-center hidden text-web_white group-hover:flex text-6xl">
                  <FaPlayCircle />
                </div>
                <span className={styles.movieTitle}>
                  <label className="group-hover:bottom-0">{movie.title}</label>
                  <label className="group-hover:hidden">{(movie.vote_average).toFixed(2)}</label>
                  </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MoviesSection };
