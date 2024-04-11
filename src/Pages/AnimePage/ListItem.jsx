import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ListItem.scss";

export default function ListItem({ id, addSynopsis }) {
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
    <div className="carousel">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: "30rem" }}
          image={anime.images.jpg.image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {" "}
            {anime.title}
          </Typography>
        </CardContent>
      </Card>
      {addSynopsis && <p className="carousel__synopsis">{anime.synopsis}</p>}
    </div>
  );
}
