import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class CountDown extends Component {

  constructor(props) {
    super(props)

    this.state = {

      infected: this.props.total.confirmed_cases,
      Deaths: this.props.total.deaths,
      Countries: this.props.total.affected_countries,

    }

  }
  render() {
    return (

      <Slide left delay={1000}>

        <div className="countdown_wrapper">
          <div className="countdown_top">
            Corona Updates
                </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time countdown">
                {this.state.infected}
              </div>
              <div className="countdown_tag">
                Infected
                        </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time countdown">
                {this.state.Deaths}
              </div>
              <div className="countdown_tag">
                Deaths
                        </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time countdown">
                {this.state.Countries}
              </div>
              <div className="countdown_tag">
                Countries
                        </div>
            </div>

          </div>
        </div>



      </Slide>

    );
  }
}

export default CountDown;