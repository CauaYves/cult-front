import styled from "styled-components";
import Image from "next/image";
import colors from "@/constants/colors";
import breakpoint from "@/styles/breakpoint";
import Link from "next/link";
import arrow from "public/icon_arrow.svg";

interface ModulesProps {
  route: string;
  moduleName: string;
  icon: string;
}

function Modules({ route, moduleName, icon }: ModulesProps) {
  return (
    <Main href={route}>
      <InfoModule>
        <Image src={icon} alt={moduleName}></Image>
        <h2>{moduleName}</h2>
      </InfoModule>
      <BottomModule>
        <p>ir</p>
        <Image src={arrow} alt="ir para" />
      </BottomModule>
    </Main>
  );
}

const Main = styled(Link)`
  box-shadow: 0px 5px 10px #0000002e;
  height: 160px;
  width: 150px;
  margin: 5px 0px;
  &:hover {
    margin-bottom: 10px;
    transition: all 0.1s ease;
  }
  @media (max-width: ${breakpoint}) {
    width: 90%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      margin: 5px 0px;
    }
    div {
      height: 100%;
    }
  }
`;

const InfoModule = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  height: 80%;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  h2 {
    text-align: center;
    color: ${colors.font};
  }

  @media (max-width: ${breakpoint}) {
    width: 70%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    h2 {
      font-size: 10px;
      text-align: center;
      max-width: 50%;
      color: ${colors.font};
    }
  }
`;

const BottomModule = styled.div`
  background-color: ${colors.thirty};
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    color: white;
  }

  @media (max-width: ${breakpoint}) {
    width: 30%;
  }
`;

export { Modules };
