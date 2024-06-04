import { createContext, useState } from "react";

interface SidebarContextType {
  openSidenav: boolean;
  handleSidenav: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  openSidenav: false,
  handleSidenav: () => {},
});

interface Props {
  children: React.ReactElement;
}

export const SidebarProvider: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  const [openSidenav, setOpenSidenav] = useState(false);

  const handleSidenav = () => {
    setOpenSidenav(!openSidenav);
  };

  return (
    <SidebarContext.Provider value={{ openSidenav, handleSidenav }}>
      {children}
    </SidebarContext.Provider>
  );
};
