import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function RecommendationsPage({ recommendedAnime }) {
  const [renderRecommendedAnime, setRenderRecommendedAnime] =
    React.useState(null);

  const MALapiURL = "https://api.jikan.moe/v4/anime";

  const handleRecommendedAnime = async () => {
    try {
      const response = await axios.get();
      setRenderRecommendedAnime();

      return;
    } catch (error) {
      console.error("Error rendering anime:", error);
    }
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image="" title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            {recommendedAnime}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
