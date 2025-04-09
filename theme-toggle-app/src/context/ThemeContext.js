import React, { createContext, useContext, useState } from "react";

// Создаем контекст для темы
const ThemeContext = createContext();

// Поставщик контекста
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для удобного доступа к контексту
export const useTheme = () => useContext(ThemeContext);
