import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animeArray from "../../data/savedAnimes.json";
import ListItem from "./ListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AnimePage.scss";

export default function AnimePage() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const nav = useNavigate();

  console.log(animeArray);

  if (animeArray.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section class="section--polka">
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
          {animeArray.map((anime) => {
            return <ListItem key={anime.id} id={anime.id} addSynopsis={true} />;
          })}
        </Slider>

        <div className="animepage__slider-bottom">
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            swipeToSlide={true}
            focusOnSelect={true}
            slidesToShow={3}
          >
            {animeArray.map((anime) => {
              return <ListItem key={anime.id} id={anime.id} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}
