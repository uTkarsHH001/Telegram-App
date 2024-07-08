import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();
export const ThemeProvider = ThemeContext.Provider;

const SidebarContext = createContext();
export const SidebarProvider = SidebarContext.Provider;

const IsChatOpenContext = createContext();
export const IsChatOpenProvider = IsChatOpenContext.Provider;

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
  const toggleChat = () => {
    setIsChatOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <SidebarProvider value={{isSidebarOpen, toggleSidebar}}>
        <IsChatOpenProvider value={{ isChatOpen, toggleChat }}>
          {children}
        </IsChatOpenProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export { ThemeContext, IsChatOpenContext, SidebarContext };

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};