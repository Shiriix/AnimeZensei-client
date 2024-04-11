import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animeArray from "../../data/savedAnimes.json";
import ListItem from "./ListItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AnimePage() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 800,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const nav = useNavigate();

  const MALapiURL = "https://api.jikan.moe/v4/anime/";

  console.log(animeArray);

  if (animeArray.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Slider {...settings}>
        {animeArray.map((anime) => {
          return <ListItem key={anime.id} id={anime.id} />;
        })}
      </Slider>
    </>
  );
}
