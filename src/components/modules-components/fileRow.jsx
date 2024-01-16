import styled from "styled-components";

export default function FileRow({ id, name, extension, files, setFiles }) {
  const bar = extension.indexOf("/");
  let type = extension.substring(0, bar);
  let format = extension.substring(bar + 1, extension.length);

  function deleteFile() {
    const newFilesList = [...files];
    newFilesList.splice(id, 1);
    setFiles(newFilesList);
  }

  return (
    <Main>
      <div>{name}</div>
      <Infos>
        <div>{type}</div>
        <div>{format}</div>
      </Infos>
      <ButtonDelete onClick={deleteFile}>excluir</ButtonDelete>
    </Main>
  );
}

const Main = styled.div`
  width: 98%;
  height: 50px;
  padding: 0px 10px;
  border-radius: 5px;
  margin: 0px auto 5px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #d9d9d9;
  box-shadow: 1px 1px 2px #0000001f;
  &:hover {
    opacity: 0.9;
  }
  div:first-child {
    width: 50%;
  }
`;
const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

const ButtonDelete = styled.div`
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 0px #00046e;
  }
`;
