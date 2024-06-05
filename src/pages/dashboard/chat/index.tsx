import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { ConnectionContext } from "src/context/ConnectionContext";
import { MessageContext } from "src/context/MessageContext";
import { socket } from "src/socket";
import { Message } from "src/types/message";

export function ChatPage() {
  const { connected, handleConnection } = useContext(ConnectionContext);
  const { messages, addMessage, init } = useContext(MessageContext);

  const [newMessage, setNewMessage] = useState<Message>({
    message: "",
    username: "yopiangga",
    timestamp: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewMessage({
      ...newMessage,
      message: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempMessage = {
      ...newMessage,
      timestamp: Date.now().toString(),
    };
    // addMessage(tempMessage);

    socket.emit("chat-msg", tempMessage);

    setNewMessage({
      message: "",
      username: "yopiangga",
      timestamp: "",
    });
  };

  return (
    <div className="flex mt-4 flex-col gap-12 min-h-[calc(100vh-100px)]">
      <Card className="h-[calc(100vh-128px)]">
        <CardBody className="overflow-x-scroll px-0 pt-0 h-full relative">
          <div className="absolute top-0 bottom-16 w-full p-2 flex flex-col gap-2 overflow-scroll">
            {messages.map((message: Message, index) => (
              <BubbleChat key={index} message={message} />
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex absolute bottom-0 w-full gap-2 p-2"
          >
            <Input
              name="new-msg"
              size="lg"
              placeholder="Type a message..."
              className=" !border-t-blue-gray-200 focus:!border-t-cyan-900 w-full"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin=""
              onChange={handleChange}
              value={newMessage.message}
            />
            <Button className="bg-cyan-900" type="submit">
              <PaperAirplaneIcon className="w-5 h-5 text-inherit" />
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

function BubbleChat({ message }: { message: Message }) {
  return (
    <div className="flex gap-2 bg-cyan-900 text-white w-fit max-w-[80%] p-2 rounded-md">
      <div className="flex flex-col gap-1">
        <Typography variant="small" className="font-semibold">
          {message.username}
        </Typography>
        <Typography variant="small">{message.message}</Typography>
        <Typography className="text-xs">{message.timestamp}</Typography>
      </div>
    </div>
  );
}
