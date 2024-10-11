import MovieItem from "./MovieItem";

//constant called movies with argument called props
const Movies = (props )=>{
    return ( // returning line and props. myMovie variable name from rea.js
        <div>
            Hello from movies component
            {console.log(props.myMovies)}
            <MovieItem /> 
            {/* embeding movie item into movies */}
        </div>
    )
}

export default Movies;
