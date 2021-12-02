import { useEffect, useState, useRef } from "react";

export const GetData = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = window.localStorage.getItem("id");
  const webSocket = useRef(null);
  useEffect(() => {
    webSocket.current = new WebSocket(`ws:localhost:80/${id}`);
    webSocket.current.onmessage = (message) => {
      let parsedMessage = JSON.parse(message.data);
      console.log("pm", parsedMessage);
      if (
        parsedMessage.type === "AWAITING_FRIEND_REQUEST" ||
        parsedMessage.type === "AMBIGUOUS_USER" ||
        "ENDED"
      ) {
        setMessages(parsedMessage);
        setLoading(false);
      }
    };
    return () => webSocket.current.close();
  }, []);
  return { messages, loading };
};
