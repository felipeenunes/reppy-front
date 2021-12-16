import { HeaderMain } from "./style";

const Header = ({ pageTitle }) => {
  return (
    <HeaderMain>
      <h1>{pageTitle}</h1>
      <button>CRIAR REPPY</button>
    </HeaderMain>
  );
};

export default Header;
