import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

//constant create returning h3 tag
const MovieItem = (props)=>{
    useEffect(() => {
        console.log("Movie Item:", props.mymovie);
      }, [props.mymovie]); // Only run this effect when the mymovie prop changes
    
      return (
        <div>
          <Card>
            <Card.Header>{props.mymovie.Title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
                <footer>{props.mymovie.Year}</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      );
}
// this allows code to be imported by app.js
export default MovieItem;