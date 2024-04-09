import { useState } from "react";
import PromptBox from "./Components/PromptBox/PromptBox";
import RecommendationsPage from "./Pages/RecommendationsPage/RecommendationsPage";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [content, setContent] = useState(null);

  const handleSendRequest = async (selectedOption) => {
    try {
      const response = await processMessageToChatGPT(selectedOption);
      setContent(response.choices[0]?.message?.content);

      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
      }
      return selectedOption;
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  async function processMessageToChatGPT(selectedOption) {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `give me an anime like ${selectedOption}` },
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
      <div className="chat">
        <PromptBox onSend={handleSendRequest} />
        <div className="content">
          <RecommendationsPage recommendedAnime={content} />
        </div>
      </div>
    </>
  );
}

export default App;
