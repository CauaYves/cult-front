"use client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import user from "public/icon_user.svg";
import lock from "public/icon_lock.svg";
import eye from "public/icon_eye.svg";
import logo from "public/logo.png";
import slicedeye from "public/icon_slicedeye.svg";
import { login } from "../api/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { MoonLoader } from "react-spinners";
import breakpoint from "@/styles/breakpoint";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Copyright } from "@/components/atoms/copyright";

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [userCode, setUserCode] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_token, setToken] = useLocalStorage("token", "");

  async function successOrFailLogin() {
    const response = await login({ code: userCode, password });
    const token = response?.token;
    if (token) {
      setToken(token);
      toast.success("Login realizado com sucesso!");
      router.push("/home");
    } else {
      toast.error(`Credenciais incorretas!`);
    }

    setLoading(false);
  }

  return (
    <Main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <LoginBox>
        <LogoWrapper>
          <Logo>
            <Image src={logo} alt="logo" priority={true} />
          </Logo>
        </LogoWrapper>
        <InputWrapper>
          <div>
            <Image src={user} alt="user" />
            <input
              type="text"
              name="usercode"
              id="usercode"
              placeholder="Código do usuário"
              value={userCode}
              disabled={loading}
              onChange={(e) => setUserCode(e.target.value)}
            />
          </div>
          <div>
            <Image src={lock} alt="lock" />
            <input
              type={hidePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Senha"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              <Image
                src={hidePassword ? slicedeye : eye}
                alt="eye"
                onClick={() => setHidePassword(!hidePassword)}
              />
            </span>
          </div>
        </InputWrapper>
        <ButtonWrapper>
          {!loading ? (
            <input
              type="button"
              value="Entrar"
              disabled={loading}
              onClick={() => {
                successOrFailLogin();
                setLoading(true);
              }}
            />
          ) : (
            <MoonLoader color={"#000000"} loading={true} size={30} />
          )}
        </ButtonWrapper>
      </LoginBox>
      <CopyWrapper>
        <Copyright />
      </CopyWrapper>
    </Main>
  );
}

const Main = styled.main`
  width: 100dvw;
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(50deg, #283874, #2cd6cb);
`;

const LoginBox = styled.div`
  max-width: 400px;
  width: 90vw;
  height: 400px;
  background-color: #fcfcfcb5;
  border-radius: 10px;
  box-shadow: 1px 9px 13px #0000002b;
`;

const LogoWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  height: 70%;
  width: 70%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const InputWrapper = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      position: absolute;
      top: 7px;
      left: 35px;
      @media (max-width: ${breakpoint}) {
        left: 30x;
      }
    }
    input {
      height: 40px;
      width: 65%;
      background-color: #f5f5f5;
      padding: 0px 50px;
      border-radius: 50px;
      font-size: 14px;
    }

    input:disabled {
      opacity: 0.7;
    }
    span {
      position: absolute;
      right: 90px;
      cursor: pointer;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 0px;
    background-color: #0a194f;
    width: 40%;
    height: 40%;
    border-radius: 50px;
    color: #e2e2e2;
    font-size: 17px;
    cursor: pointer;
  }
  input:disabled {
    opacity: 0.7;
    cursor: initial;
  }
`;

const CopyWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  @media (max-width: ${breakpoint}) {
    p {
      font-size: 2vw;
    }
  }
`;
