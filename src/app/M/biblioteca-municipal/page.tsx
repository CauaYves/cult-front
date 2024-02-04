"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import { MainHeader } from "@/components/atoms";
import { HeaderButton } from "@/components/molecules/";
import book from "public/icon_book.svg";
import React, { ReactNode, useState } from "react";
import { UnderConstruction } from "@/components/organisms";
import { Title } from "@/components/atoms";
import { DataForm } from "@/components/organisms";

export default function BibliotecaMuni() {
  type OrganismKeys =
    | "Cadastrodeleitores"
    | "Cadastrodeacervo"
    | "Cadastrodereservadelivros"
    | "Controledeemprestimos"
    | "Bibliotecamovel";

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
          <HeaderButton
            text="Cadastro de leitores"
            setValue={() => setSelectedModule("Cadastrodeleitores")}
          />
          <HeaderButton
            text="Cadastro de acervo"
            setValue={() => setSelectedModule("Cadastrodeacervo")}
          />
          <HeaderButton
            text="Cadastro de reserva de livros"
            setValue={() => setSelectedModule("Cadastrodereservadelivros")}
          />
          <HeaderButton
            text="Controle de empréstimos"
            setValue={() => setSelectedModule("Controledeemprestimos")}
          />
          <HeaderButton
            text="Biblioteca móvel"
            setValue={() => setSelectedModule("Bibliotecamovel")}
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
