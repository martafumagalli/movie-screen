import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';
import info from './../upcoming-movies.json';
import './components.css';

const UpcomingCard = (props) => {

  return (
    <div className="container">
      {
        props.movie.map(({ title, poster_path }) => (
          <Card className="moviecard">
            <CardImg className="cardimage" top width="100%" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="Card " />
            <CardBody>
              {/* <CardTitle>{title}</CardTitle> */}
              <Button outline color="info" className="buttoncard">See More</Button>
            </CardBody>
          </Card>
        ))
      }
    </div>

  );
};

export default UpcomingCard;
