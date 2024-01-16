import styled from "styled-components";
import Link from "next/link";

export default function HeaderButton({ text, isSelected }) {
  return (
    <Main $isSelected={isSelected} href="/M/EmConstrucao">
      <h3>{text}</h3>
    </Main>
  );
}

const Main = styled(Link)`
  background-color: #ffff;
  opacity: ${(props) => (props.$isSelected ? 0.9 : null)};

  padding: 10px;
  height: 60%;
  border-radius: 5px;
  margin-right: 10px;

  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
