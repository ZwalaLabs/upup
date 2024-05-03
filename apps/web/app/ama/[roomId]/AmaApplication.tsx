"use client";

import { useEffect, useState } from "react";
import type { message } from "types";
import { Avatar } from "ui";
import type { SelectRooms, SelectUsers } from "../../../db/schema";
import handleRecMessage from "../../../utils/ws/handleRecMessage";
import handleRecUpvote from "../../../utils/ws/handleRecUpvote";
import SendMessage from "./SendMessage";
import { Messages } from "./messages";

function AmaApplication({
  roomId,
  room,
  host,
  isAdmin,
  sender,
}: {
  roomId: string;
  room: SelectRooms;
  host: SelectUsers;
  isAdmin: boolean;
  sender: string;
}) {
  const hostedBy = host.name || host.email;

  const [webSocket, setWebSocket] = useState<WebSocket>(
    () =>
      new WebSocket(process.env.NEXT_PUBLIC_WS_SERVER || "ws://localhost:8080"),
  );
  const [messages, setMessages] = useState<message["payload"][]>([]);

  useEffect(() => {
    // connect to room (on open)
    webSocket.onopen = () => {
      webSocket.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId,
          },
        }),
      );
    };

    // handle message
    webSocket.onmessage = (event: MessageEvent<string>) => {
      const data = JSON.parse(event.data) as message;

      console.log({ data });

      if (data.type === "message")
        setMessages((prev) => handleRecMessage(prev, data));

      if (data.type === "upvote")
        setMessages((prev) => handleRecUpvote(prev, data));

      if (data.type === "clear")
        setMessages((prevMessages) =>
          prevMessages.filter((m) => m.id !== data.payload.message),
        );
    };

    // recreating ws connection on close
    webSocket.onclose = () => {
      setWebSocket(new WebSocket("ws://localhost:8080"));
    };

    return () => {
      webSocket.close();
    };
  }, [webSocket, roomId]);

  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">{room.name}</h1>
        {hostedBy ? (
          <div className="flex items-center gap-2 text-xs">
            <p>by</p>
            <Avatar alt={hostedBy} fallback={hostedBy} src={host.image || ""} />
            <p>{hostedBy}</p>
          </div>
        ) : null}
      </div>

      <Messages isAdmin={isAdmin} messages={messages} webSocket={webSocket} />

      <SendMessage sender={sender} webSocket={webSocket} />
    </>
  );
}

export default AmaApplication;
