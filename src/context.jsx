import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();
export const ThemeProvider = ThemeContext.Provider;

const SidebarContext = createContext();
export const SidebarProvider = SidebarContext.Provider;

const IsChatOpenContext = createContext();
export const IsChatOpenProvider = IsChatOpenContext.Provider;

const IsMenuOptionClickedContext = createContext();
export const IsMenuOptionClickedProvider = IsMenuOptionClickedContext.Provider;

export const AppProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('dark'); 
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const showChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const [isMenuOptionClicked, setIsMenuOptionClicked] = useState(false);
  const showClikedMenuOption = () => {
    setIsMenuOptionClicked(true);
  };

  const closeClikedMenuOption = () => {
    setIsMenuOptionClicked(false);
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <SidebarProvider value={{isSidebarOpen, toggleSidebar}}>
        <IsChatOpenProvider value={{ isChatOpen, showChat, closeChat }}>
          <IsMenuOptionClickedProvider value={{ isMenuOptionClicked, showClikedMenuOption, closeClikedMenuOption }}>
            {children}
          </IsMenuOptionClickedProvider>
        </IsChatOpenProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export { ThemeContext, IsChatOpenContext, SidebarContext, IsMenuOptionClickedContext};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};