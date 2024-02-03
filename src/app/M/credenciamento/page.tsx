"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import list from "public/icon_list.svg";
import { useState } from "react";
import { DataForm, UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { HeaderButton } from "@/components/molecules/";

export default function Credenciamento() {
  const [selectedModule, setSelectedModule] = useState(
    "Cadastrodeagentesculturais"
  );
  const organismObjects: any = {
    Cadastrodeagentesculturais: <DataForm allowFiles={true} />,
    Cadastrodeeditaiseinscricoes: <UnderConstruction />,
    Publicacoes: <UnderConstruction />,
    AvaliacoesePareceres: <UnderConstruction />,
    PrestaçãodeContas: <UnderConstruction />,
    AtosLegais: <UnderConstruction />,
  };

  return (
    <DashboardLayout>
      <Main>
        <Title title={"CREDENCIAMENTO"} subtitle={selectedModule} icon={list} />
        <MainHeader>
          <HeaderButton
            text="Cadastro de agentes culturais"
            setValue={() => setSelectedModule("Cadastrodeagentesculturais")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Cadastro de editais e inscrições"
            setValue={() => setSelectedModule("Cadastrodeeditaiseinscricoes")}
          />
          <HeaderButton
            text="Publicações"
            setValue={() => setSelectedModule("Publicacoes")}
          />
          <HeaderButton
            text="Avaliações e Pareceres"
            setValue={() => setSelectedModule("AvaliacoesePareceres")}
          />
          <HeaderButton
            text="Prestação de Contas"
            setValue={() => setSelectedModule("PrestaçãodeContas")}
          />
          <HeaderButton
            text="Atos Legais"
            setValue={() => setSelectedModule("AtosLegais")}
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
