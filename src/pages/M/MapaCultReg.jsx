import CulturalMapForm from "@/components/modules-components/CulturalMapForm";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import pointermap from "../../../public/img/icon_pointermap.svg";
import { useState } from "react";
import UnderConstruction from "@/components/UnderConstruction";

export default function MapaCultReg() {
  const [selectedModule, setSelectedModule] = useState("Cadastrodeeventos");
  const organismObjects = {
    Cadastrodeeventos: <CulturalMapForm />,
    Cadastrodeespacos: <UnderConstruction />,
    Agentes: <UnderConstruction />,
    Projetos: <UnderConstruction />,
  };

  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"MAPA CULTURAL"}
          subtitle={"Cadastro de eventos"}
          icon={pointermap}
        />
        <MainHeader>
          <HeaderButton
            text="Cadastro de eventos"
            $isSelected={true}
            setValue={() => setSelectedModule("Cadastrodeeventos")}
          />
          <HeaderButton
            text="Cadastro de espaços"
            setValue={() => setSelectedModule("Cadastrodeespacos")}
          />
          <HeaderButton
            text="Agentes"
            setValue={() => setSelectedModule("Agentes")}
          />
          <HeaderButton
            text="Projetos"
            setValue={() => setSelectedModule("Projetos")}
          />
        </MainHeader>
        {organismObjects[selectedModule]}
      </Main>
    </DashboardLayout>
  );
}

const Main = styled.div`
  width: 100vw;
  padding-top: 40px;
`;
