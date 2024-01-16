import styled from "styled-components";
import Image from "next/image";

export default function Title({ title, subtitle, icon }) {
  return (
    <Main>
      <Image src={icon} alt={title} height={"20"} />
      <h1>{title}</h1>
      <p>/{subtitle}/</p>
    </Main>
  );
}

const Main = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: auto auto 25px auto;

  display: flex;
  align-items: center;
`;
