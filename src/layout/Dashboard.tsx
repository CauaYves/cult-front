import styled from "styled-components";
import colors from "@/constants/colors";
import { Navbar } from "@/components/organisms";
import { ReactNode } from "react";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <Content>
      <Navbar />
      <main>{children}</main>
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100dvw;
  background-color: ${colors.background};
  position: relative;
  overflow-x: hidden;
`;
