import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/BotAvatar";


const config = {
  initialMessages: [createChatBotMessage(`Hello Friend, How may I help you with ??`)],
  botName: "Chatty",

  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
  },

  customStyles: {
      //overrides the chatbot message styles
      botMessageBox: {
        backgroundColor: "rgb(36, 170, 125)",
      },
      //overrides the chat button styles
      chatButton: {
        backgroundColor: "rgb(36, 170, 125)",
      },
  },
};

export default config;