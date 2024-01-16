import Form from "@/components/modules-components/Form";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import brush from "../../../public/img/icon_brush.svg";

export default function GaleriaExpoMuni() {
  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"GALERIAS E EXPOSIÇÕES MUNICIPAIS"}
          subtitle={"Cadastro de expositores"}
          icon={brush}
        />
        <MainHeader>
          <HeaderButton text="Cadastro de expositores" isSelected={true} />
          <HeaderButton text="Cadastro de expositores e reservas" />
          <HeaderButton text="Agenda de exposições" />
          <HeaderButton text="Controle de contribuições" />
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
