import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListItem({ id }) {
  const [anime, setAnime] = useState(null);
  const MALapiURL = "https://api.jikan.moe/v4/anime/";

  const fetchAnime = async (id) => {
    if (!id) {
      return;
    }
    try {
      const { data } = await axios.get(`${MALapiURL}${id}`);
      setAnime(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAnime(id);
  }, []);

  if (!anime) {
    return <></>;
  }

  console.log(anime);

  return (
    <li className="anime__list-item" key={anime.id}>
      <div className="anime__list-details">
        <h3
          className="anime__list-name"
          //   onClick={() => {
          //     nav(`/anime/${anime.id}`);
          //   }}
        >
          {anime.title}
        </h3>
      </div>
    </li>
  );
}
