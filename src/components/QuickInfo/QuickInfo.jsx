import { useState, useEffect } from 'react'; 
import toast, { Toaster } from 'react-hot-toast';
import * as moviesAPI from '../../service/moviesApi';
import bat from "../../assets/Images/Batman.jpg";
import west from "../../assets/Images/WildWest.jpg";
import spiderman from "../../assets/Images/Spiderman.jpg";
import MovieList from './MovieList';

import styles from "./QuickInfo.module.css";
import MovieListGrid from './MovieListGrid';
import AddFavourites from './AddFavourites';
import RemoveFavorites from './RemoveFavourites';

export default function QuickInfo() {
  const [moviesGrid, setmoviesGrid]= useState([
    { 
      id: 11111,
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut...",
      poster: bat,
      title: "Batman returns"
     },
     { 
      id: 11112,
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut...",
      poster: west,
      title: "Wild Wild West"
     },
     { 
      id: 11113,
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut...",
      poster: spiderman,
      title: "The Amazing Spiderman"
     }
  ])
  const [movies, setMovies] = useState([]);
  const[searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
    if (!searchQuery) return;
    moviesAPI.moviesSearch(searchQuery).then(data => {
      if (data.results.length === 0 ) {
        console.log("data.results.length",data.results.length)
        return toast.error(`Sorry there are no movies with ${searchQuery} name`, setMovies([]));
      }
      if (data.results) {
        return setMovies(data.results);
      }
    });
  }, [searchQuery]);


  const handleSearch = e => {
    e.preventDefault();
    const target = e.target.elements.searchMovie.value.toLowerCase();
    if (target.trim() === '') {
      return toast.error('The search field is empty!');
    }
    setSearchQuery(target);
    e.target.reset();

  };

  const addFavouritesMovie = (movie) => {
    const newFavouriteList = [ ...moviesGrid, movie];
    const movieAdded = moviesGrid.some((film) => movie.title === film.title)
    console.log("movie.title", movie.title )
    console.log("mmovieAdded", movieAdded)
    if (movieAdded){
      return toast.error(`You have been already add ${movie.title} to grid`);
    }
    setmoviesGrid(newFavouriteList);
    // setMovies([]);
  }


  const removeFavouritesMovie = (movie) => {
    const newFavouriteList = moviesGrid.filter((favourite) => favourite.id !== movie.id);
    console.log("newFavouriteList", newFavouriteList)
    setmoviesGrid(newFavouriteList);
    toast.error(`${movie.title} was removed from grid!`);
  }

  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.search_menu}>
          <div className={styles.width}>
        <p className={styles.text}>Collect your favourites</p>
          </div>
<div className={styles.width}>
      <form onSubmit={handleSearch} className={styles.form}>
      <div className={styles.src}>
        <input className={styles.search}           
        name="searchMovie"
 placeholder="Search title and add to grid"/>
      <img className={styles.img} src={require("../../assets/Icons/SearchWhite.svg").default} alt="sign search"/>
</div>
</form>
</div>
      </div>
   <div className='movie-app'>
    <div className='row'>
    <MovieListGrid movies={movies} handleFavouritesClick={addFavouritesMovie} favouriteComponent={AddFavourites} />
    </div>
    </div>   
    <MovieList movies={moviesGrid} handleFavouritesClick={removeFavouritesMovie} favouriteComponent={RemoveFavorites}/>

  
      </div>
       <Toaster />

    </>
  );
}
   