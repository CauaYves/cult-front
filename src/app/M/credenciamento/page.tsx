"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import list from "public/icon_list.svg";
import { ReactNode, useState } from "react";
import { DataForm, UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { Button } from "@mui/material";

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
        <Title title={"CREDENCIAMENTO"} subtitle={selectedModule} icon={list} />
        <MainHeader>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeagentesculturais")}
          >
            Cadastro de agentes culturais
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeeditaiseinscricoes")}
          >
            Cadastro de editais e inscricoes
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Publicacoes")}
          >
            Publicacoes
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("AvaliacoesePareceres")}
          >
            Avaliações e Pareceres
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("PrestaçãodeContas")}
          >
            PrestaçãodeContas
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("AtosLegais")}
          >
            AtosLegais
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
