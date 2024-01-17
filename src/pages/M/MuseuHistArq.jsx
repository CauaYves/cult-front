import Form from "@/components/modules-components/Form";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import home from "../../../public/img/icon_home.svg";
import { useState } from "react";
import UnderConstruction from "@/components/UnderConstruction";

export default function MuseuHistArq() {
  const [selectedModule, setSelectedModule] = useState("Cadastrobasico"); //TODO checar se allowFiles é false mesmo
  const organismObjects = {
    Cadastrobasico: <Form allowFiles={false} />,
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
