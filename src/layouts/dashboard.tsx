import { Routes, Route } from "react-router-dom";
import { Sidenav, DashboardNavbar, Footer } from "src/widgets/layout";
import routes from "src/routes";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { ConnectionContext } from "src/context/ConnectionContext";
import { socket } from "src/socket";
import { MessageContext } from "src/context/MessageContext";
import { Message } from "src/types/message";

export function DashboardLayout() {
  const { connected, handleConnection } = useContext(ConnectionContext);
  const { messages, addMessage, init } = useContext(MessageContext);

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav brandName="Prisma Dashboard" routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
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
