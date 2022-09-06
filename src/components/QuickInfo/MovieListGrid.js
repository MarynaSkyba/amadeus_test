import styles from "./MovieListGrid.module.css";
// import AddFavorites from "./addFavorites";

const MovieListGrid = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      <div>
        <ul>
          {props.movies.map((movie, index) => (
            <li className={styles.list_container} key={index}>
              <div className={styles.img_contaner}>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.poster}
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/s9cXZV0/poster.jpg"
                    alt={movie.name}
                    className={styles.poster}
                  />
                )}
              </div>
              <div className={styles.about_film}>
                <p className={styles.title}>{movie.title}</p>
                <div
                  className="overlay"
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  <FavouriteComponent />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieListGrid;
