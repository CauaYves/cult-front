import styled from "styled-components";
import alert from "../../public/img/icon_alert.svg";
import arrow from "../../public/img/icon_blackarrow.svg";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <UnderConstructionMain>
      <AlertWindow>
        <div>
          <div>
            <Image src={alert} alt="Em construção" />
          </div>
          <h1>Esta página se encontra em fase de construção! </h1>
          <br />
          <p>Previsão para conclusão: 30/03/2024 </p>
        </div>
        <div>
          <Image src={arrow} alt="Voltar" width={40} />
          <Link href="/Home">Voltar ao Menu principal</Link>
        </div>
      </AlertWindow>
    </UnderConstructionMain>
  );
}

const UnderConstructionMain = styled.div`
  max-width: 1200px;
  height: 70dvh;
  margin: auto;
`;

const AlertWindow = styled.div`
  height: 100%;
  background-color: #ffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 5px;
  box-shadow: 1px 2px 5px #00000029;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  div:last-child {
    display: flex;
    align-items: center;
  }
`;
