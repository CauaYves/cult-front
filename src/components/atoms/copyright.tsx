import Image from "next/image";
import styled from "styled-components";
import logo from "public/logo.png";

function Copyright() {
  return (
    <Main>
      <Image src={logo} alt="Erudir tecnologia" width={100} priority />
      <Paragraph>
        c Copyright 2023 Culturalize - Todos os direitos reservados.
      </Paragraph>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
  }
`;

const Paragraph = styled.div`
  font-size: 10px;
`;

export { Copyright };
