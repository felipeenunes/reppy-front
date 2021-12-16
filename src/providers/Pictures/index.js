import { createContext, useContext, useState } from "react";

const PictureContext = createContext();

export const PictureProvider = ({ children }) => {
  const [picture, setPicture] = useState([]);

  return (
    <PictureContext.Provider value={{ setPicture, picture }}>
      {children}
    </PictureContext.Provider>
  );
};

export const usePicture = () => useContext(PictureContext);
