import { AuthProvider } from "./Auth";
import { AddressProvider } from "./Address";
import { PictureProvider } from "./Pictures";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AddressProvider>
        <PictureProvider>{children}</PictureProvider>
      </AddressProvider>
    </AuthProvider>
  );
};

export default Providers;
