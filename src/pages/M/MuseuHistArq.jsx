import Form from "@/components/modules-components/Form";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import home from "../../../public/img/icon_home.svg";

export default function MuseuHistArq() {
  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"MUSEU DE HISTÓRIA E ARQUIVO"}
          subtitle={"Cadastro básico"}
          icon={home}
        />
        <MainHeader>
          <HeaderButton text="Cadastro básico" isSelected={true} />
          <HeaderButton text="Acervo físico" />
          <HeaderButton text="Cadastro de catalogação" />
          <HeaderButton text="Acervo digital" />
          <HeaderButton text="Controle de Contribuições" />
        </MainHeader>
        <Form allowFiles={false} />
      </Main>
    </DashboardLayout>
  );
}

const Main = styled.div`
  width: 100vw;
  padding-top: 40px;
`;
