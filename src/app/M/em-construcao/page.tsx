"use client";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import list from "public/icon_list.svg";
import { Title } from "@/components/atoms";
import { UnderConstruction } from "@/components/organisms";

export default function EmConstrucao() {
  return (
    <DashboardLayout>
      <ContentConstruction>
        <Title title={"Em construção"} subtitle={""} icon={list} />
        <UnderConstruction />
      </ContentConstruction>
    </DashboardLayout>
  );
}

const ContentConstruction = styled.div`
  width: 100vw;
  padding-top: 40px;
`;
