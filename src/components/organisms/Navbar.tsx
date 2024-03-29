import styled from "styled-components";
import Image from "next/image";
import logo from "public/logo.png";
import suport from "public/icon_support.svg";
import exit from "public/icon_exit.svg";
import colors from "../../constants/colors";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

function Navbar() {
  const Router = useRouter();
  const [_token, _setToken, removeToken] = useLocalStorage("token", "");

  function logout() {
    removeToken();
    Router.push("/cad-acesso");
  }

  return (
    <Main>
      <SubMain>
        <Left>
          <Link href="/home" as="/home">
            <Image
              src={logo}
              alt="Erudir"
              width={150}
              height={105}
              priority={true}
            />
          </Link>
        </Left>

        <Right>
          <Link href="/M/em-construcao">
            <p>Suporte</p>
            <Image src={suport} alt="suporte-image" />
          </Link>
          <LogoutButton onClick={logout}>
            <p>Sair</p>
            <Image src={exit} alt="suporte" />
          </LogoutButton>
        </Right>
      </SubMain>
    </Main>
  );
}

const Main = styled.nav`
  background-color: ${colors.fifty};
  width: 100dvw;
  height: 50px;
  box-shadow: 0px 2px 10px #00000066;
`;

const SubMain = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 70%;

  padding-right: 10px;
  border-right: 1px solid white;
`;

const Right = styled.div`
  display: flex;
  cursor: initial;

  a:first-child {
    margin-right: 20px;
    border-right: 1px solid white;
    padding-right: 10px;
  }
  a {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
  }
  a:hover {
    font-weight: 600;
  }
  p {
    margin-right: 5px;
    color: white;
  }
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  p {
    color: white;
    &:hover {
      font-weight: 600;
    }
  }
`;

export { Navbar };
