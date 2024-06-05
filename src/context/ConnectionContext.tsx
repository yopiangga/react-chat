import { createContext, useState } from "react";

interface ConnectionContextType {
  connected: boolean;
  handleConnection: () => void;
}

export const ConnectionContext = createContext<ConnectionContextType>({
  connected: false,
  handleConnection: () => {},
});

interface Props {
  children: React.ReactElement;
}

export const ConnectionProvider: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  const [connected, setConnected] = useState(false);

  const handleConnection = () => {
    setConnected(!connected);
  };

  return (
    <ConnectionContext.Provider value={{ connected, handleConnection }}>
      {children}
    </ConnectionContext.Provider>
  );
};
