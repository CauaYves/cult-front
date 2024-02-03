import styled from "styled-components";
import breakpoint from "@/styles/breakpoint";

function HeaderButton({ text, setValue }: any) {
  return (
    <Main
      onClick={() => {
        setValue(text);
      }}
    >
      <h3>{text}</h3>
    </Main>
  );
}

const Main = styled.div`
  min-height: 44px;
  max-height: 90%;

  background-color: #ffff;

  padding: 10px;
  border-radius: 5px;
  margin: 5px 10px 5px 0px;

  display: flex;
  align-items: center;
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

export { HeaderButton };
