import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import {
  HomePage,
  ProfilePage,
  UsersPage,
  UserEditPage,
  UserAddPage,
  ChatPage,
} from "src/pages/dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export interface Route {
  layout?: string;
  pages: RoutePage[];
}

export interface RoutePage {
  icon: React.ReactNode; // Represent any React Node for the icon
  name: string;
  path: string;
  element: React.ReactNode; // Represent any React Node for the component
  type?: "private"; // Optional type property for private routes
}

export const routes: Route[] = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <HomePage />,
      },
      {
        icon: <ChatBubbleLeftIcon {...icon} />,
        name: "chat",
        path: "/chat",
        element: <ChatPage />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <UsersPage />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "user",
        path: "/users/edit/:id",
        element: <UserEditPage />,
        type: "private",
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "user",
        path: "/users/add",
        element: <UserAddPage />,
        type: "private",
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
];

export default routes;
