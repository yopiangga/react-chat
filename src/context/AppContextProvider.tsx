import { CombineComponents } from "./CombineComponents";
import { UserProvider } from "./UserContext";
import { SidebarProvider } from "./SidebarContext";
import { ConnectionProvider } from "./ConnectionContext";
import { MessageProvider } from "./MessageContext";
import { ProfileProvider } from "./ProfileContext";

const providers = [
  UserProvider,
  SidebarProvider,
  ConnectionProvider,
  MessageProvider,
  ProfileProvider,
];
export const AppContextProvider = CombineComponents(...providers);
