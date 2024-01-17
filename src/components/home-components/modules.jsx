import styled from "styled-components";
import Image from "next/image";
import colors from "@/constants/colors";
import breakpoint from "@/styles/breakpoint";
import Link from "next/link";
import arrow from "../../../public/img/icon_arrow.svg";

export default function Modules({ route, moduleName, icon }) {
  return (
    <Main href={route}>
      <div>
        <InfoModule>
          <Image src={icon} alt={moduleName}></Image>
          <h2>{moduleName}</h2>
        </InfoModule>
        <BottomModule>
          <p>ir</p>
          <Image src={arrow} alt="ir para" />
        </BottomModule>
      </div>
    </Main>
  );
}

const Main = styled(Link)`
  box-shadow: 0px 5px 10px #0000002e;
  height: 160px;
  width: 150px;
  margin: 5px 0px;
  > div {
    height: 100%;
    width: 100%;
    cursor: pointer;

    @media (max-width: ${breakpoint}) {
      width: 150px;
    }
  }
`;

const InfoModule = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;

  padding-top: 20px;
  h2 {
    text-align: center;
    color: ${colors.font};
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
`;
