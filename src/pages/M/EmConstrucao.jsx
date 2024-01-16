import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import Title from "@/components/modules-components/Title";
import list from "../../../public/img/icon_list.svg";
import UnderConstruction from "@/components/UnderConstruction";

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
