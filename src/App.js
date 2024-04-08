import { useState } from "react";
import PromptBox from "./Components/PromptBox/PromptBox";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [content, setContent] = useState(null);
  const [content2, setContent2] = useState(null);
  const [content3, setContent3] = useState(null);
  const [originalPrompt, setOriginalPrompt] = useState(null);

  const handleSendRequest = async (selectedOption) => {
    try {
      const response = await processMessageToChatGPT(selectedOption);
      setContent(response.choices[0]?.message?.content);

      const response2 = await processMessageToChatGPT(selectedOption);
      setContent2(response2.choices[0]?.message?.content);

      const response3 = await processMessageToChatGPT(selectedOption);
      setContent3(response3.choices[0]?.message?.content);

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

  // const handleNewResponse = async (event) => {
  //   event.preventDefault();

  //   const secondPrompt = `I dont like ${content}.${originalPrompt}  `;

  //   try {
  //     const newResponse = await processMessageToChatGPT([secondPrompt]);
  //     setContent(newResponse.choices[0]?.message?.content);
  //     console.log(newResponse);
  //     if (content) {
  //       const chatGPTResponse = {
  //         message: content,
  //         sender: "ChatGPT",
  //       };
  //     }
  //   } catch (error) {
  //     console.error("Error processing message:", error);
  //   }
  // };

  return (
    <>
      <div className="chat">
        <PromptBox onSend={handleSendRequest} />
        <div className="content">
          {content && <p className="content__box">{content}</p>}
          {content2 && <p className="content__box">{content2}</p>}
          {content3 && <p className="content__box">{content3}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
