import React from 'react';
import { useTheme } from './context/ThemeContext'; // Импортируйте ваш контекст

const ThemeToggle = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div 
            className="{theme-toggle ${isDarkTheme ? 'dark' : 'light'}}  // Кавычки в классе верны
            onClick={toggleTheme}
            style={{ cursor: 'pointer', padding: '10px', border: '1px solid' }}"
        >
            Переключить тему
        </div>
    );
};

export default ThemeToggle;