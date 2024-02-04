import styled from "styled-components";
import Image from "next/image";

type TitlePros = {
  title: string;
  subtitle: string;
  icon: string;
};

function Title({ title, subtitle, icon }: TitlePros) {
  return (
    <Main>
      <Image src={icon} alt={title} height={"20"} priority={true} />
      <h1>{title}</h1>
      <p>/{subtitle}/</p>
    </Main>
  );
}

const Main = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: auto;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
`;

export { Title };
