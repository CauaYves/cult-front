import styled from "styled-components";
import Navbar from "@/components/navbar-components";
import colors from "@/constants/colors";

export default function Dashboard({ children }) {
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
