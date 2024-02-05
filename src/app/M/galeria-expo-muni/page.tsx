"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import brush from "public/icon_brush.svg";
import { ReactNode, useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { DataForm } from "@/components/organisms";
import { Button } from "@mui/material";

export default function GaleriaExpoMuni() {
  type OrganismKeys =
    | "Cadastrodeexpositores"
    | "Cadastrodeexpositoresereservas"
    | "Agendadeexposicoes"
    | "Controledecontribuicoes";

  const [selectedModule, setSelectedModule] = useState<OrganismKeys>(
    "Cadastrodeexpositores"
  );

  interface OrganismObjects {
    [key: string]: ReactNode;
  }

  const organismObjects: OrganismObjects = {
    Cadastrodeexpositores: <DataForm allowFiles={true} />,
    Cadastrodeexpositoresereservas: <UnderConstruction />,
    Agendadeexposicoes: <UnderConstruction />,
    Controledecontribuicoes: <UnderConstruction />,
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
          title={"GALERIAS E EXPOSIÇÕES MUNICIPAIS"}
          subtitle={"Cadastro de expositores"}
          icon={brush}
        />
        <MainHeader>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeexpositores")}
          >
            Cadastro de editais e inscricoes
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeexpositoresereservas")}
          >
            Cadastro de expositores e reservas
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Agendadeexposicoes")}
          >
            Agenda de exposições
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Controledecontribuicoes")}
          >
            Controle de contribuições
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
