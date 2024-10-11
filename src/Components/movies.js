import MovieItem from "./MovieItem";

//constant called movies with argument called props
const Movies = (props )=>{
        return props.myMovies.map(
            (movie) => {
                return <MovieItem mymovie={movie} key={movie.imbdID} />
            }
        );
    }


export default Movies;
