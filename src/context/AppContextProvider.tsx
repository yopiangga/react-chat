import { CombineComponents } from "./CombineComponents";
import { UserProvider } from "./UserContext";
import { SidebarProvider } from "./SidebarContext";

const providers = [UserProvider, SidebarProvider];
export const AppContextProvider = CombineComponents(...providers);
