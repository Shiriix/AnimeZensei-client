import { useState, useEffect } from "react";
import PromptBox from "./Components/PromptBox/PromptBox";
import RecommendationsPage from "./Pages/RecommendationsPage/RecommendationsPage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import AnimeDetailsPage from "./Pages/AnimeDetailsPage/AnimeDetailsPage";
import AnimePage from "./Pages/AnimePage/AnimePage";
import animeArrayData from "./data/savedAnimes.json";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [content, setContent] = useState(null);
  const [userResponse, setUserResponse] = useState("");
  const [urlResponse, setURLResponse] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [animeArray, setAnimeArray] = useState(animeArrayData);

  const handleDropdownChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    await handleSendRequest(selectedValue);
  };

  useEffect(() => {
    if (content) {
      const [title, idString] = content.split(`(ID:`);

      const id = idString.slice(0, -1);

      setUserResponse(title);
      setURLResponse(id);
    }
  }, [content]);

  const handleSendRequest = async (selectedOption) => {
    try {
      const response = await processMessageToChatGPT(selectedOption);
      setContent(response.choices[0]?.message?.content);

      return selectedOption;
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  async function processMessageToChatGPT(selectedOption) {
    const animeListString = animeArray
      .map((anime) => `${anime.title} (ID: ${anime.id})`)
      .join(", ");
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Retrieve a recommendation for an anime similar to ${selectedOption} from this list: ${animeListString} and only give me the anime title and the anime id`,
        },
      ],
    };

    const responseData = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      }
    );

    return responseData.json();
  }

  return (
    <>
      <BrowserRouter>
        <Navbar animeArray={animeArray} />
        <Routes>
          <Route
            path="/"
            element={
              <PromptBox
                onChange={handleDropdownChange}
                selectedOption={selectedOption}
              />
            }
          />

          <Route
            path="/recommendations"
            element={
              <RecommendationsPage
                recommendedAnimeResponse={userResponse}
                recommendedAnimeData={urlResponse}
                onChange={handleDropdownChange}
              />
            }
          />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/anime/:animeid" element={<AnimeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
