import styled from "styled-components";
import Image from "next/image";
import GoTo from "./go-to";
import colors from "@/constants/colors";
import breakpoint from "@/styles/breakpoint";
import Link from "next/link";

export default function Modules({ route, moduleName, icon }) {
  return (
    <Main href={route}>
      <InfoModule>
        <Image src={icon} alt={moduleName}></Image>
        <h2>{moduleName}</h2>
      </InfoModule>
      <GoTo route={route} />
    </Main>
  );
}

const Main = styled(Link)`
  width: 150px;
  height: 110px;
  border-radius: 0px 0px 15px 15px;

  margin: 50px 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 24px 10px #00000037;
    transition: all 0.1s ease;
    padding: 1px;
  }

  @media (max-width: ${breakpoint}) {
    margin: 40px 0px;
    width: 150px;
    height: 100px;
  }
`;

const InfoModule = styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: white;
  height: 110%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;

  padding-top: 20px;
  h2 {
    text-align: center;
    font-size: 100%;

    color: ${colors.font};
    font-family: Inter;
    font-size: 14.13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;
