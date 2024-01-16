import CulturalMapForm from "@/components/modules-components/CulturalMapForm";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import pointermap from "../../../public/img/icon_pointermap.svg";

export default function MapaCultReg() {
  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"MAPA CULTURAL"}
          subtitle={"Cadastro de eventos"}
          icon={pointermap}
        />
        <MainHeader>
          <HeaderButton text="Cadastro de eventos" $isSelected={true} />
          <HeaderButton text="Cadastro de espaços" />
          <HeaderButton text="Agentes" />
          <HeaderButton text="Projetos" />
        </MainHeader>
        <CulturalMapForm />
      </Main>
    </DashboardLayout>
  );
}

const Main = styled.div`
  width: 100vw;
  padding-top: 40px;
`;
