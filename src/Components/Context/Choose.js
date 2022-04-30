import React, { createContext, useState } from "react";
import { dataBtn } from "../../mock/btn";

export const ChooseCreateContext = createContext();
export const ChooseContext = ({ children }) => {
  const [headerName, setHeaderName] = useState();
  return (
    <ChooseCreateContext.Provider value={[headerName, setHeaderName]}>
      {children}
    </ChooseCreateContext.Provider>
  );
};
export default ChooseContext;
