import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";

export function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "User",
      message: "Message 1",
      date: "2022-01-01",
    },
  ]);

  return (
    <div className="flex mt-4 flex-col gap-12 min-h-[calc(100vh-100px)]">
      <Card className="h-[calc(100vh-128px)]">
        <CardBody className="overflow-x-scroll px-0 pt-0 h-full relative">
          <div className="absolute top-0 bottom-16 w-full p-2">
            {messages.map((message) => (
              <BubbleChat key={message.id} />
            ))}
          </div>
          <div className="flex absolute bottom-0 w-full gap-2 p-2">
            <Input
              name="new-msg"
              size="lg"
              placeholder="Type a message..."
              className=" !border-t-blue-gray-200 focus:!border-t-cyan-900 w-full"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin=""
            />
            <Button className="bg-cyan-900">
              <PaperAirplaneIcon className="w-5 h-5 text-inherit" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function BubbleChat() {
  return (
    <div className="flex gap-2 bg-cyan-900 text-white w-fit max-w-[80%] p-2 rounded-md">
      {/* <Avatar
        src="https://images.unsplash.com/photo-1593642532935-2b1f6f7c1b7b"
        alt="User"
        size="sm"
      /> */}
      <div className="flex flex-col gap-1">
        <Typography variant="small" className="font-semibold">
          User
        </Typography>
        <Typography variant="small">
          Message amn kakd akj adj jdakjk jadkj kdaj djk kh ak djaj daj dak kad
          k
        </Typography>
      </div>
    </div>
  );
}
