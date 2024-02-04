"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import pointermap from "public/icon_pointermap.svg";
import { HeaderButton } from "@/components/molecules/";
import { ReactNode, useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { CulturalMapForm } from "@/components/organisms/CulturalMapForm";

export default function MapaCultReg() {
  type OrganismKeys =
    | "Cadastrodeeventos"
    | "Cadastrodeespacos"
    | "Agentes"
    | "Projetos";

  const [selectedModule, setSelectedModule] =
    useState<OrganismKeys>("Cadastrodeeventos");

  interface OrganismObjects {
    [key: string]: ReactNode;
  }

  const organismObjects: OrganismObjects = {
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
            setValue={() => setSelectedModule("Cadastrodeeventos")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Cadastro de espaços"
            setValue={() => setSelectedModule("Cadastrodeespacos")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Agentes"
            setValue={() => setSelectedModule("Agentes")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Projetos"
            setValue={() => setSelectedModule("Projetos")}
            selectedModule={selectedModule}
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
