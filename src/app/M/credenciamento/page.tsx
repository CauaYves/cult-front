"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import list from "public/icon_list.svg";
import { ReactNode, useState } from "react";
import { DataForm, UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { HeaderButton } from "@/components/molecules/";

export default function Credenciamento() {
  type OrganismKeys =
    | "Cadastrodeagentesculturais"
    | "Cadastrodeeditaiseinscricoes"
    | "AvaliacoesePareceres"
    | "Publicacoes"
    | "PrestaçãodeContas"
    | "AtosLegais";

  const [selectedModule, setSelectedModule] = useState<OrganismKeys>(
    "Cadastrodeagentesculturais"
  );

  interface OrganismObjects {
    [key: string]: ReactNode;
  }
  const organismObjects: OrganismObjects = {
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
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Publicações"
            setValue={() => setSelectedModule("Publicacoes")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Avaliações e Pareceres"
            setValue={() => setSelectedModule("AvaliacoesePareceres")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Prestação de Contas"
            setValue={() => setSelectedModule("PrestaçãodeContas")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Atos Legais"
            setValue={() => setSelectedModule("AtosLegais")}
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
