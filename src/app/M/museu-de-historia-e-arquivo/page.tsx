"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { ReactNode, useState } from "react";
import { Title } from "@/components/atoms";
import { UnderConstruction } from "@/components/organisms";
import { DataForm } from "@/components/organisms";
import home from "public/icon_home.svg";
import { Button } from "@mui/material";

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

  const buttonsStyles = {
    background: "white",
    color: "black",
    height: "40px",
    width: "190px",
    lineHeight: "normal",
    margin: "0px 5px 5px 0px",
    fontSize: "12px",
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
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrobasico")}
          >
            Cadastro básico
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Acervofisico")}
          >
            Acervo físico
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodecatalogacao")}
          >
            Cadastro de catalogacão
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Acervodigital")}
          >
            Acervo digital
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("ControledeContribuicoes")}
          >
            Controle de Contribuicões
          </Button>
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

const MainHeader = styled.div`
  background-color: #0a194f;

  max-width: 1200px;
  width: 100vw;

  margin: auto;

  padding: 20px 10px;

  border-radius: 5px;
`;
