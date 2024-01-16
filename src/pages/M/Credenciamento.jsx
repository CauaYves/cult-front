import Form from "@/components/modules-components/Form";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import list from "../../../public/img/icon_list.svg";

export default function Credenciamento() {
  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"CREDENCIAMENTO"}
          subtitle={"Cadastro de agentes culturais"}
          icon={list}
        />
        <MainHeader>
          <HeaderButton
            text="Cadastro de agentes culturais"
            isSelected={true}
          />
          <HeaderButton text="Cadastro de editais e inscrições" />
          <HeaderButton text="Publicações" />
          <HeaderButton text="Avaliações e Pareceres" />
          <HeaderButton text="Prestação de Contas" />
          <HeaderButton text="Atos Legais" />
        </MainHeader>
        <Form allowFiles={true} />
      </Main>
    </DashboardLayout>
  );
}

const Main = styled.div`
  width: 100vw;
  padding-top: 40px;
`;
