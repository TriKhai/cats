import React, { Component } from 'react'
import Header from '../../component/Home/Header/Header'
import Carousel from './Carousel'
import Welcom from './Welcom'
import Ourstats from './Ourstats'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Welcom />
        <Ourstats />
      </div>
    )
  }
}
