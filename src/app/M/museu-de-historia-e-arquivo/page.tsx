"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import { ReactNode, useState } from "react";
import { Title } from "@/components/atoms";
import { UnderConstruction } from "@/components/organisms";
import { DataForm } from "@/components/organisms";
import { HeaderButton } from "@/components/molecules/";
import home from "public/icon_home.svg";

export default function MuseuHistArq() {
  type OrganismKeys =
    | "Cadastrobasico"
    | "Acervofisico"
    | "Cadastrodecatalogacao"
    | "Acervodigital"
    | "ControledeContribuicoes";

  const [selectedModule, setSelectedModule] =
    useState<OrganismKeys>("Cadastrobasico");
  interface OrganismObjects {
    [key: string]: ReactNode;
  }
  const organismObjects: OrganismObjects = {
    Cadastrobasico: <DataForm allowFiles={false} />,
    Acervofisico: <UnderConstruction />,
    Cadastrodecatalogacao: <UnderConstruction />,
    Acervodigital: <UnderConstruction />,
    ControledeContribuicoes: <UnderConstruction />,
  };

  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"MUSEU DE HISTÓRIA E ARQUIVO"}
          subtitle={"Cadastro básico"}
          icon={home}
        />
        <MainHeader>
          <HeaderButton
            text="Cadastro básico"
            setValue={() => setSelectedModule("Cadastrobasico")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Acervo físico"
            setValue={() => setSelectedModule("Acervofisico")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Cadastro de catalogação"
            setValue={() => setSelectedModule("Cadastrodecatalogacao")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Acervo digital"
            setValue={() => setSelectedModule("Acervodigital")}
            selectedModule={selectedModule}
          />
          <HeaderButton
            text="Controle de Contribuições"
            setValue={() => setSelectedModule("ControledeContribuicoes")}
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
