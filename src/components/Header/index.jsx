import Logo from "../Logo";
import { HeaderMain } from "./style";

const Header = () => {
  return (
    <HeaderMain>
      <Logo />
      <h1>REPÚBLICAS</h1>
      <button>CRIAR REPPY</button>
    </HeaderMain>
  );
};

export default Header;
