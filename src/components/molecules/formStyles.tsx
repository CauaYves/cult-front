import styled from "styled-components";
import { Form, ErrorMessage } from "formik";
import { FormControl } from "@mui/material";
import breakpoint from "@/styles/breakpoint";
import colors from "@/constants/colors";

const styles = {
  Main: styled.div`
    width: 100dvw;
    padding: 10px;
  `,
  Warn: styled(ErrorMessage)`
    font-size: 10px;
    color: #f80000;
    position: absolute;
    right: 30px;
    bottom: 10px;
  `,

  FormWrapper: styled(Form)`
    max-width: 1200px;
    width: 90vw;
    padding: 20px;
    border-radius: 5px;

    width: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;

    background-color: #ffff;
    box-shadow: 3px 3px 9px #0000002f;
  `,

  FormControlStyled: styled(FormControl)`
    padding: 0px 5px;
    width: 33%;
    div {
      width: calc(100% - 10px);
      height: 25px;
    }
    @media (max-width: ${breakpoint}) {
      width: 100%;
    }
  `,

  FormContainer: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  `,

  FileContainer: styled.div`
    margin: 10px 0px 0px 0px;
    width: 100%;

    padding: 10px 0px;
    margin: 10px 0px;
  `,

  InfoFiles: styled.div`
    width: 100%;
  `,

  Caption: styled.div`
    height: 30px;
    width: 100%;
    margin: 10px 0px;
    border-radius: 5px 5px 0px 0px;
    padding: 0px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${colors.fifty};
    div > p {
      color: white;
    }
    div:first-child {
      width: 50%;
    }
  `,

  InfosCaption: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 30%;
  `,
  TableFiles: styled.div`
    border: 1px solid #000000;
    border-top: none;
    border-radius: 5px;

    padding: 0px 0px 20px 0px;
  `,
  Block: styled.div`
    width: 100%;
  `,

  ButtonWrapper: styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  `,

  AbsoluteContainer: styled.div`
    width: min-content;
    a {
      display: flex;
    }
  `,
};

export { styles };
