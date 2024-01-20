import styled from "styled-components";
import colors from "@/constants/colors";
function MainHeader({ children }) {
  return <Main>{children}</Main>;
}

const Main = styled.div`
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
