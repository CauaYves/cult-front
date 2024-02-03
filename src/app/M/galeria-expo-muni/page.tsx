"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import { HeaderButton } from "@/components/molecules/";
import brush from "public/icon_brush.svg";
import { useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { DataForm } from "@/components/organisms";

export default function GaleriaExpoMuni() {
  const [selectedModule, setSelectedModule] = useState("Cadastrodeexpositores");
  const organismObjects: any = {
    Cadastrodeexpositores: <DataForm allowFiles={true} />,
    Cadastrodeexpositoresereservas: <UnderConstruction />,
    Agendadeexposicoes: <UnderConstruction />,
    Controledecontribuicoes: <UnderConstruction />,
  };

  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"GALERIAS E EXPOSIÇÕES MUNICIPAIS"}
          subtitle={"Cadastro de expositores"}
          icon={brush}
        />
        <MainHeader>
          <HeaderButton
            text="Cadastro de expositores"
            setValue={() => setSelectedModule("Cadastrodeexpositores")}
          />
          <HeaderButton
            text="Cadastro de expositores e reservas"
            setValue={() => setSelectedModule("Cadastrodeexpositoresereservas")}
          />
          <HeaderButton
            text="Agenda de exposições"
            setValue={() => setSelectedModule("Agendadeexposicoes")}
          />
          <HeaderButton
            text="Controle de contribuições"
            setValue={() => setSelectedModule("Controledecontribuicoes")}
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
