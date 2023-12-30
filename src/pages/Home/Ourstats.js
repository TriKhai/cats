import React, { Component } from 'react'
import styler from './Ourstats.module.css'
export default class Ourstats extends Component {
  render() {
    const wrapW = {
      padding: '80px 15px',
      maxwidth: '1140px',
      margin: '0 auto',
    }
    return (
      <div className={`${styler.Our}`} style={wrapW}>
        <div className={`${styler.Our__Tile} container`}>
          <h1>OUR STATS</h1>
          <p>When Climbing The Carrer Ladder</p>
        </div>
        <div className={`Our__Conten`}>
          <div className={`row`}>
            <div className={`col-3`}>
              <div className={`${styler.Our__item} container`}>
                <i class="fab fa-phoenix-squadron"></i>
                <h3>Education</h3>
                <p>99</p>
              </div>
            </div>
            <div className={`col-3`}>
              <div className={`${styler.Our__item} container`}>
                <i class="fa fa-jedi"></i>
                <h3>Practices</h3>
                <p>234</p>
              </div>
            </div>
            <div className={`col-3`}>
              <div className={`${styler.Our__item} container`}c>
                <i class="fab fa-sith"></i>
                <h3>View</h3>
                <p>999</p>
              </div>
            </div>
            <div className={`col-3`}class="col-3">
              <div className={`${styler.Our__item} container`}>
                <i class="fa fa-share-alt-square"></i>
                <h3>Share</h3>
                <p>9999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
