"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import book from "public/icon_book.svg";
import React, { ReactNode, useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { DataForm } from "@/components/organisms";
import { Button } from "@mui/material";

export default function BibliotecaMuni() {
  type OrganismKeys =
    | "Cadastrodeleitores"
    | "Cadastrodeacervo"
    | "Cadastrodereservadelivros"
    | "Controledeemprestimos"
    | "Bibliotecamovel";

  const buttonsStyles = {
    background: "white",
    color: "black",
    height: "40px",
    width: "190px",
    lineHeight: "normal",
    margin: "0px 5px 5px 0px",
    fontSize: "12px",
  };
  const [selectedModule, setSelectedModule] =
    useState<OrganismKeys>("Cadastrodeleitores");

  interface OrganismObjects {
    [key: string]: ReactNode;
  }

  const organismObjects: OrganismObjects = {
    Cadastrodeleitores: <DataForm allowFiles={false} />,
    Cadastrodeacervo: <UnderConstruction />,
    Cadastrodereservadelivros: <UnderConstruction />,
    Controledeemprestimos: <UnderConstruction />,
    Bibliotecamovel: <UnderConstruction />,
  };

  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"BIBLIOTECA MUNICIPAL"}
          subtitle={"Cadastro de leitores"}
          icon={book}
        />
        <MainHeader>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Bibliotecamovel")}
          >
            Biblioteca móvel
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeacervo")}
          >
            Cadastro de acervo
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodeleitores")}
          >
            Cadastro de leitores
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Cadastrodereservadelivros")}
          >
            Cadastro de reserva de livros
          </Button>
          <Button
            variant="contained"
            style={buttonsStyles}
            onClick={() => setSelectedModule("Controledeemprestimos")}
          >
            Controle de empréstimos
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
