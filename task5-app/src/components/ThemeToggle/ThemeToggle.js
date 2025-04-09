import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
<div className="{theme-toggle ${isDarkTheme ? 'dark' : 'light'}}">
      <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
      <button onClick={handleToggle}>
        Переключить тему
      </button>
      
    </div>
  );
};

export default ThemeToggle;    



