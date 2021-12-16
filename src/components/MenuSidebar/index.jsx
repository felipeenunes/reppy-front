import { useHistory } from "react-router-dom";
import { CentralIcons, Sidebar } from "./styles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiHomeHeart, BiFilterAlt } from "react-icons/bi";

export const MenuSidebar = () => {
  const history = useHistory();
  return (
    <Sidebar>
      <BiHomeHeart onClick={() => history.push("/")} />
      <CentralIcons>
        <HiOutlineLocationMarker onClick={() => history.push("/")} />
        <BiFilterAlt />
      </CentralIcons>
      <AiOutlineUser onClick={() => history.push("/profile")} />
    </Sidebar>
  );
};

export default MenuSidebar;
