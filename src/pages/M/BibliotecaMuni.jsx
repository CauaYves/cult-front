import Form from "@/components/modules-components/Form";
import DashboardLayout from "@/layout/Dashboard";
import styled from "styled-components";
import MainHeader from "@/components/modules-components/MainHeader";
import HeaderButton from "@/components/modules-components/HeaderButton";
import Title from "@/components/modules-components/Title";
import book from "../../../public/img/icon_book.svg";

export default function BibliotecaMuni() {
  return (
    <DashboardLayout>
      <Main>
        <Title
          title={"BIBLIOTECA MUNICIPAL"}
          subtitle={"Cadastro de leitores"}
          icon={book}
        />
        <MainHeader>
          <HeaderButton text="Cadastro de leitores" isSelected={true} />
          <HeaderButton text="Cadastro de acervo" />
          <HeaderButton text="Cadastro de reserva de livros" />
          <HeaderButton text="Controle de empréstimos" />
          <HeaderButton text="Biblioteca móvel" />
        </MainHeader>
        <Form allowFiles={false} />
      </Main>
    </DashboardLayout>
  );
}

const Main = styled.div`
  width: 100vw;
  padding-top: 40px;
`;
