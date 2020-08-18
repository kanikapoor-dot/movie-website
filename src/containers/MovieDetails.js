import React from "react";
import "../css/MovieDetails.css";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_details: {},
    };
    
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    console.log(params)
    this.fetchDetails(params);
  }

  fetchDetails = async (params) => {
    await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          movie_details: response.data.movie,
        });
      })
      .catch((err) => console.log(err));
  };

  downloadTorrent = () => {
    var torrents = this.state.movie_details.torrents;
    window.location.href = torrents[0].url;
  };


  render() {
    const { movie_details } = this.state;
    return (
      <div className="container">
        <div className="grid-container">
          <div className="grid-left">
            <img
              alt={movie_details.title_english}
              src={movie_details.large_cover_image}
            />
            <button onClick={this.downloadTorrent}>Download Torrent</button>
          </div>
          <div className="grid-right">
            <h2>Title:{movie_details.title_english}</h2>
            <h2>Description:</h2>
            <article>{movie_details.description_full}</article>
            <p className="rating">Rating: {movie_details.rating} / 10</p>
          </div>
        </div>        
      </div>
    );
  }
}

export default MovieDetails;
