// reducers.js
import { TOGGLE_THEME } from "./actionTypes";

const initialState = {
  isDarkTheme: false, // false для светлой темы, true для темной
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
