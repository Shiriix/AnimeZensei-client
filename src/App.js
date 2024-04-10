import { useState, useEffect } from "react";
import PromptBox from "./Components/PromptBox/PromptBox";
import RecommendationsPage from "./Pages/RecommendationsPage/RecommendationsPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [content, setContent] = useState(null);
  const [userResponse, setUserResponse] = useState("");
  const [urlResponse, setURLResponse] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    await handleSendRequest(selectedValue);
  };

  const animeArray = [
    {
      title: "Attack on Titan",

      id: 16498,
    },
    {
      title: "Naruto",

      id: 20,
    },
    {
      title: "One Punch Man",

      id: 30276,
    },
    {
      title: "Trigun",

      id: 6,
    },
    {
      title: "My Hero Academia",

      id: 31964,
    },
    {
      title: "Perfect Blue",

      id: 437,
    },
    {
      title: "Blue Lagoon",

      id: 889,
    },
    {
      title: "Samurai Champloo",

      id: 205,
    },
    {
      title: "Kimba the White Lion",

      id: 1572,
    },
    {
      title: "Afro Samurai",

      id: 1292,
    },
    {
      title: "Baccano!",

      id: 2251,
    },
    {
      title: "Your Lie in April",

      id: 23273,
    },
    {
      title: "A Place Further than the Universe",

      id: 35839,
    },
    {
      title: "Princess Mononoke",

      id: 164,
    },
    {
      title: "Hunter x Hunter",

      id: 11061,
    },
    {
      title: "Full Metal Alchemist: Brotherhood",

      id: 5114,
    },
    {
      title: "Jujutsu Kaisen",

      id: 40748,
    },
    {
      title: "Violet Evergarden",

      id: 33352,
    },
    {
      title: "Cowboy Bebop:",

      id: 1,
    },
    {
      title: "Beastars",

      id: 39195,
    },
    {
      title: "Grave of the Fireflies",

      id: 578,
    },
    {
      title: "Gungrave",

      id: 267,
    },
    {
      title: "Gurren Lagann",

      id: 2001,
    },
    {
      title: "A Lull in the Sea",

      id: 16067,
    },
  ];

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
      <Navbar />
      <div className="chat">
        <PromptBox
          onChange={handleDropdownChange}
          selectedOption={selectedOption}
        />
        <div className="content">
          <RecommendationsPage
            recommendedAnimeResponse={userResponse}
            recommendedAnimeData={urlResponse}
            onChange={handleDropdownChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
