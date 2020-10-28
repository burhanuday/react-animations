import React, { createContext, useReducer } from "react";

const initialState = {
  active: false,
};

const menuContext = createContext(initialState);

const { Provider } = menuContext;

const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "TOGGLE_MENU":
        return { active: !state.active };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { menuContext, MenuProvider };
