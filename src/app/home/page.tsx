"use client";
import React from "react";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import list from "public/icon_list.svg";
import book from "public/icon_book.svg";
import home from "public/icon_home.svg";
import brush from "public/icon_brush.svg";
import pointer from "public/icon_pointermap.svg";
import { Modules } from "@/components/molecules";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <ModulesWrapper>
        <SubContainer>
          <Modules
            route={"/M/credenciamento"}
            moduleName={"CREDENCIAMENTO"}
            icon={list}
          />
          <Modules
            route={"/M/biblioteca-municipal"}
            moduleName={"BIBLIOTECA MUNICIPAL"}
            icon={book}
          />
          <Modules
            route={"/M/museu-de-historia-e-arquivo"}
            moduleName={"MUSEU DE HISTÓRIA E ARQUIVO"}
            icon={home}
          />
          <Modules
            route={"/M/galeria-expo-muni"}
            moduleName={"GALERIAS E EXPOSIÇÕES MUNICIPAIS"}
            icon={brush}
          />
          <Modules
            route={"/M/mapa-cultural-regional"}
            moduleName={"MAPA CULTURAL REGIONAL"}
            icon={pointer}
          />
        </SubContainer>
      </ModulesWrapper>
    </DashboardLayout>
  );
};

const ModulesWrapper = styled.div`
  max-width: 1200px;
  height: 65dvh;
  margin: 40px auto;
`;

const SubContainer = styled.div`
  height: 200px;

  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-around;

  margin-top: 100px;
`;

export default DashboardPage;
