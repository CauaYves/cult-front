import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import pointermap from "public/icon_pointermap.svg";
import { HeaderButton } from "@/components/molecules/";
import { useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { CulturalMapForm } from "@/components/organisms/CulturalMapForm";

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
