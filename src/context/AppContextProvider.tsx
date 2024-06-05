import { CombineComponents } from "./CombineComponents";
import { UserProvider } from "./UserContext";
import { SidebarProvider } from "./SidebarContext";
import { ConnectionProvider } from "./ConnectionContext";
import { MessageProvider } from "./MessageContext";

const providers = [
  UserProvider,
  SidebarProvider,
  ConnectionProvider,
  MessageProvider,
];
export const AppContextProvider = CombineComponents(...providers);
