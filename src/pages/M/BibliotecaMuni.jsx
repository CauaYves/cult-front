import Form from "@/components/modules-components/Form";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import book from "../../../public/img/icon_book.svg";
import { useState } from "react";
import UnderConstruction from "@/components/UnderConstruction";

export default function BibliotecaMuni() {
  const [selectedModule, setSelectedModule] = useState("Cadastrodeleitores");
  const organismObjects = {
    Cadastrodeleitores: <Form allowFiles={false} />,
    Cadastrodeacervo: <UnderConstruction />,
    Cadastrodereservadelivros: <UnderConstruction />,
    Controledeemprestimos: <UnderConstruction />,
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
