import styled from "styled-components";
import colors from "@/constants/colors";
import React from "react";

interface MainHeaderProps {
  children: React.ReactNode
}

const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return <MainHeaderStyled>{children}</MainHeaderStyled>;
}

const MainHeaderStyled = styled.div`
  background-color: ${colors.fifty};
  box-shadow: 1px 1px 10px #00000022;

  max-width: 1200px;
  width: 98vw;

  margin: auto;
  border-radius: 5px;
  padding-left: 10px;

  display: flex;
  align-items: center;
`;

export { MainHeader };
