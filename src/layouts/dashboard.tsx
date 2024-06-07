import { Routes, Route } from "react-router-dom";
import { Sidenav, DashboardNavbar, Footer } from "src/widgets/layout";
import routes from "src/routes";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { ConnectionContext } from "src/context/ConnectionContext";
import { socket } from "src/socket";
import { MessageContext } from "src/context/MessageContext";
import { Message } from "src/types/message";
import { UserContext } from "src/context/UserContext";
import { ProfileContext } from "src/context/ProfileContext";
import { UserServices } from "src/services/UserServices";
import { User } from "src/types/user";
import LoadComponent from "src/widgets/load";

export function DashboardLayout() {
  const userServices = new UserServices();

  const { connected, handleConnection } = useContext(ConnectionContext);
  const { messages, addMessage, init } = useContext(MessageContext);
  const { users, initUsers } = useContext(UserContext);
  const { profile, initProfile } = useContext(ProfileContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (users.length === 0) fetchData();

    function onConnect() {
      handleConnection();
    }

    function onDisconnect() {
      handleConnection();
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("init", (messages) => {
      init(messages);
    });

    socket.on("chat-msg", (message: Message) => {
      addMessage(message);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("init");
      socket.off("chat-msg");
    };
  }, []);

  useEffect(() => {}, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await userServices.getUsers();
    const userWithImages = response.map((user: User) => ({
      ...user,
      avatar: `https://picsum.photos/50?random=${user.id}`,
    }));
    initUsers(userWithImages);
    initProfile(
      userWithImages[Math.floor(Math.random() * userWithImages.length)]
    );

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav brandName="Prisma App" routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />

        {isLoading && <LoadComponent />}

        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default DashboardLayout;
