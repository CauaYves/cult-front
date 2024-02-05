"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import pointermap from "public/icon_pointermap.svg";
import { ReactNode, useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { CulturalMapForm } from "@/components/organisms/CulturalMapForm";
import { Button } from "@mui/material";

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
          title={"MAPA CULTURAL"}
          subtitle={"Cadastro de eventos"}
          icon={pointermap}
        />
        <MainHeader>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeeventos")}
          >
            PrestaçãodeContas
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeespacos")}
          >
            Cadastro de espacos
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Agentes")}
          >
            Agentes
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Projetos")}
          >
            Projetos
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
