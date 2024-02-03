"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import { useState } from "react";
import { Title } from "@/components/atoms";
import { UnderConstruction } from "@/components/organisms";
import { DataForm } from "@/components/organisms";
import { HeaderButton } from "@/components/molecules/";
import home from "public/icon_home.svg";

export default function MuseuHistArq() {
  const [selectedModule, setSelectedModule] = useState("Cadastrobasico");
  const organismObjects: any = {
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
            isSelected={true}
            setValue={() => setSelectedModule("Cadastrobasico")}
          />
          <HeaderButton
            text="Acervo físico"
            setValue={() => setSelectedModule("Acervofisico")}
          />
          <HeaderButton
            text="Cadastro de catalogação"
            setValue={() => setSelectedModule("Cadastrodecatalogacao")}
          />
          <HeaderButton
            text="Acervo digital"
            setValue={() => setSelectedModule("Acervodigital")}
          />
          <HeaderButton
            text="Controle de Contribuições"
            setValue={() => setSelectedModule("ControledeContribuicoes")}
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