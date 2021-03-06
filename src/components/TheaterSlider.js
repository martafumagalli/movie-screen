import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import TheaterCard from './TheaterCard';
import './components.css';


function slicing(arr) {
  const size = 1;
  const finalarr = [];
  for (let i = 0; i < arr.length; i += size) {
    finalarr.push(arr.slice(i, i + size));
  }
  return finalarr;
}

export default class TheaterSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6839ebece0568da454bfdb445830df32&language=en-US&page=1')
      .then(response => response.data)
      .then(data => this.setState({ movies: data.results }));
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      pauseOnHover: false,
      vertical: false,
      initialSlide: 0,
      row: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    const { movies } = this.state;
    const slide = slicing(movies);
    return (
      <div className="container theaterslidercontainer">
        <Slider {...settings}>
          {slide.map((movie, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TheaterCard key={index} movie={movie} />
          ))}
        </Slider>
      </div>
    );
  }
}
