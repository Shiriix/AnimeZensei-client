import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animeArray from "../../data/savedAnimes.json";
import ListItem from "./ListItem";

export default function AnimePage() {
  const nav = useNavigate();

  const MALapiURL = "https://api.jikan.moe/v4/anime/";

  console.log(animeArray);

  if (animeArray.length < 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="anime__list">
        {animeArray.map((anime) => {
          return <ListItem key={anime.id} id={anime.id} />;
        })}
      </ul>
    </>
  );
}
