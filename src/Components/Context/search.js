import React, { createContext, useState } from "react";
import { data } from "../../mock/body";
export const MovieCreateContex = createContext();
export const SearchContext = ({ children }) => {
  const [lists, setLists] = useState(data);
  return (
    <MovieCreateContex.Provider value={[lists, setLists]}>
      {children}
    </MovieCreateContex.Provider>
  );
};

export default SearchContext;
