import styled from "styled-components";
import Link from "next/link";
import breakpoint from "@/styles/breakpoint";

export default function HeaderButton({ text, isSelected }) {
  return (
    <Main $isSelected={isSelected} href="/M/EmConstrucao">
      <h3>{text}</h3>
    </Main>
  );
}

const Main = styled(Link)`
  max-height: 90%;

  background-color: #ffff;
  opacity: ${(props) => (props.$isSelected ? 0.9 : null)};

  padding: 10px;
  border-radius: 5px;
  margin: 5px 10px 5px 0px;

  cursor: pointer;

  @media (max-width: ${breakpoint}) {
    width: 100px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h3 {
    font-size: 12px;
  }
  &:active {
    opacity: 0.9;
  }
`;
