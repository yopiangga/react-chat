import { createContext, useState } from "react";
import { Message } from "src/types/message";

interface MessageContextType {
  messages: Message[];
  init: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
}

export const MessageContext = createContext<MessageContextType>({
  messages: [] as Message[],
  init: (messages: Message[]) => {},
  addMessage: (message: Message) => {},
});

interface Props {
  children: React.ReactElement;
}

export const MessageProvider: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  const [messages, setMessages] = useState<Message[]>([]);

  const init = (messages: Message[]) => {
    setMessages(messages);
  };

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
  };

  return (
    <MessageContext.Provider value={{ messages, init, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
