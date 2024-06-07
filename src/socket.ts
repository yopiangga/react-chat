import io from "socket.io-client";
import { socketUrl } from "./configs/url";

export const socket = io(socketUrl);
