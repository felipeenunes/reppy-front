import { useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
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
        <HiOutlineLocationMarker />
        <BiFilterAlt />
      </CentralIcons>
      <AiOutlineUser onClick={() => history.push("/profile")} />
    </Sidebar>
  );
};
