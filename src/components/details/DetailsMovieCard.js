/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class DetailsMovieCard extends Component {
  render() {
    const {
      poster_path,
      original_title,
      overview,
      button1,
      button2,
      director,
      genre_ids,
      release_date,
      status,
      video,
      trailer,
      vote_average,
      name
    } = this.props;

    return (
      <div>
        <div className="card m-4">
          <div className="row no-gutters m-3">
            <div className="col-md-4 col-lg-6">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`
                }
                className="card-img my-card-img"
                alt=""
              />
              <a href={trailer} target="_blank">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-glossy/512/7-player_windows_media_player_video_social-512.png"
                  className="my-video-player"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-8 col-lg-6 p-2">
              <div className="card-body my-card-body p-0 pl-lg-3 d-flex flex-column">
                <h2 className="card-title pb-4">{original_title}</h2>
                <h5 className="pb-4">
                  Genre: 
                  <span className="my-genre">{name}</span>
                  <span className="my-genre">{name}</span>
                  <span className="my-genre">{name}</span>
                </h5>
                <p>
                  Directed by: 
                  <span className="font-weight-bold"> {director}</span>
                </p>
                <p>
                  Status: 
                  <span className="font-weight-bold"> {status}</span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release date:
                    {release_date}
                  </small>
                </p>
                <p className="card-text pb-2 my-overview">{overview}</p>
                <h4 className="my-3 mt-auto">
                Vote:
                  {vote_average}
                </h4>
                <a href={button1} className="btn btn-primary my-btn btn-block">
                  Add to my favorits
                </a>
                <a href={button2} className="btn btn-primary my-btn btn-block">
                  Add to watch later
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsMovieCard;
