import styles from "./QuickInfo.module.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      <div className={styles.gallery}>
        <ul className={styles.ul}>
          {props.movies.map((movie, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.img_container}>
    
                {movie.poster ? (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className={styles.poster_static}
                  />
                ) : movie.poster_path === null ? (
                  <img
                    src="https://i.ibb.co/s9cXZV0/poster.jpg"
                    alt={movie.title}
                    className={styles.poster}
                  />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.poster}
                  />
                )}

                <div onClick={() => props.handleFavouritesClick(movie)}>
                  <FavouriteComponent />
                </div>
              </div>
              <div className={styles.about_film}>
                <p className={styles.title}>{movie.title}</p>
                <p className={styles.description}>{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
