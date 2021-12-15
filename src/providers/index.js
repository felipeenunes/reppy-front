import { AuthProvider } from "./Auth";
import { AddressProvider } from "./Address";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AddressProvider>{children}</AddressProvider>
    </AuthProvider>
  );
};

export default Providers;
