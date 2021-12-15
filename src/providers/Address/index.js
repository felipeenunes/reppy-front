import { createContext, useContext, useState } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({});

  return (
    <AddressContext.Provider value={{ setAddress, address }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
