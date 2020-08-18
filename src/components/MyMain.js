import React from "react";
import "../css/MyMain.css";
import MovieCard from "./MovieCard";
import "../css/search.css";

class MainTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
     
  }
  componentDidMount(){
    this.getData("");
  }

  lodin = () => {
    return <p>loading</p>;
  };

  getData = async (search) => {
    const moviesRow = [];
    let result = [];
    let url = `https://yts.mx/api/v2/list_movies.json?&limit=30&sort_by=year&query_term=${search}`;

    

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        result = data.data.movies;
      });

    if (result) {
      result.forEach((movi) => {
        const movie = <MovieCard key={movi.id} movie={movi} />;
        moviesRow.push(movie);
      });
    } else {
      return null;
    }

    this.setState({ movies: moviesRow });
  };

  searchBarChange = (event) => {
    this.getData(event.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="searchBar">
          <div className="searchDiv">
            <form className="searchBar">
              <input
                type="text"
                placeholder="Eg : mr.robot"
                onChange={this.searchBarChange.bind(this)}
              ></input>
            </form>
          </div>
        </div>
        <main>
          <div className="movieListContainer">{this.state.movies ? this.state.movies : this.lodin}</div>
        </main>
      </div>
    );
  }
}

export default MainTag;
