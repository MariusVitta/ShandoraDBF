import React, { Component } from "react";
import Slider from "react-slick";
import {toAbsoluteUrl} from '../../../helpers'


export default class CenterMode   extends Component {
  render() {
    const settings = {
        /*customPaging: function(i: number) {
            return (
              <a>
                <img className="" src={toAbsoluteUrl("/media/avatars/150-15.jpg")} />
              </a>
            );
        },*/
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
    };
    return (
      <div>
        <h2 className="d-flex flex-center justify-content-center mb-5">  Davy Back Fight </h2>
            <Slider {...settings}>
            <div className="d-flex flex-center justify-content-center">
                <img src={toAbsoluteUrl("/media/avatars/150-15.jpg")} alt="" />
            </div>
            <div className="d-flex flex-center justify-content-center">
                <img src={toAbsoluteUrl("/media/avatars/150-16.jpg")} alt="" />
            </div>
            <div className="d-flex flex-center justify-content-center">
                <img src={toAbsoluteUrl("/media/avatars/150-17.jpg")} alt="" />
            </div>
            </Slider>
      </div>
    );
  }
}