import styled from "styled-components";
import Image from "next/image";
import { H5, P } from "./typography";

type TitlePros = {
  title: string;
  subtitle: string;
  icon: string;
};

function Title({ title, subtitle, icon }: TitlePros) {
  return (
    <Main>
      <Image src={icon} alt={title} height={"20"} priority={true} />
      <H5>{title}</H5>
      <P>/{subtitle}/</P>
    </Main>
  );
}

const Main = styled.div`
  width: 90vw;
  max-width: 1200px;

  margin: auto;
  margin-bottom: 25px;

  display: flex;
  align-items: center;

  H5 {
    color: #0a194f;
    font-weight: 600;
  }
`;

export { Title };
