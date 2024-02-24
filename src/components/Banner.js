import React, { Component } from 'react';
import { movies } from './getMovies';

export default class Banner extends Component {
  render() {
    let movie = movies.results && movies.results[0];

    return (
      <div>
        {movie ? (
          <div className="card banner-card" style={{ width: '100vw', marginTop: '1vh',marginBottom:"3vh" ,height:"70vh",color:"white"}}>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title  banner-title">{movie.title}</h5>
              <p className="card-text banner-text">kjdnkjndsjnckjskcnasknckasnckjanskjcnkjn{movie.overview}</p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}



