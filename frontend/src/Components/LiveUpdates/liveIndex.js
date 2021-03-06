import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

export default class liveIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsData: undefined
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:9000/api/news')
      .then(res => {
        console.log(res.data);
        this.setState({ newsData: res.data });
        console.log('news updated');
      })
      .catch(err => {
        console.log('news error');
        console.log(err);
      });
  }

  showBoxes = () => {





    return this.state.newsData === undefined ? (
      <div />
    ) : (
        this.state.newsData.map((item, i) => (
          <Carousel.Item
            key={i}
          >
            <img className="carousel-image" src={item.urlToImage} >
            </img>
            <Carousel.Caption>
              <b className="carousel-head">
                {item.source.name}
              </b>
              <p>{item.description}</p>
              <span>
                <b className="updatedAt">{item.publishedAt}</b>
                <a href={item.url} style={{ float: "right" }}>Read More</a>
              </span>

            </Carousel.Caption>
          </Carousel.Item >
        ))
      );
  }

  render() {
    return (
      this.state.newsData == undefined ? <div /> : (
        <div className="bck_black">
          <div className="center_wrapper  pricing_section">
            <h2>Live Updates</h2>
            <br />
            <div className="pricing_wrapper">
              <Carousel>{this.showBoxes()}</Carousel>
            </div>
          </div>
        </div>
      )
    );
  }
}
