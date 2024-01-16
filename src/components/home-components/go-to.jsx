import Image from "next/image";
import styled from "styled-components";
import arrow from "../../../public/img/icon_arrow.svg";
import colors from "@/constants/colors";

export default function GoTo({ route }) {
  return (
    <Main href={route}>
      <p>ir</p>
      <Image src={arrow} alt="ir para" />
    </Main>
  );
}

const Main = styled.a`
  background-color: ${colors.thirty};
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 15px 15px;

  p {
    color: white;
    margin-right: 5px;
  }
`;
