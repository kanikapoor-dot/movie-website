import React from "react";
import "../css/MovieCard.css";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="card">
        <Link to={`/movies/${this.props.movie.id}`}>
          <img src={this.props.movie.medium_cover_image} alt={this.props.movie.title_english}></img>
        </Link>
        <h4>{this.props.movie.title_english}</h4>
        <p>{this.props.movie.year}</p>
      </div>
    );
  }
}

export default MovieCard;
