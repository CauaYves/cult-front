import { ReactNode } from "react";
import styled from "styled-components";

function H1({ children }: { children: ReactNode }) {
  return <H1Typography>{children}</H1Typography>;
}

function H2({ children }: { children: ReactNode }) {
  return <H2Typography>{children}</H2Typography>;
}

function H3({ children }: { children: ReactNode }) {
  return <H3Typography>{children}</H3Typography>;
}

function H4({ children }: { children: ReactNode }) {
  return <H4Typography>{children}</H4Typography>;
}

function H5({ children }: { children: ReactNode }) {
  return <H5Typography>{children}</H5Typography>;
}

function H6({ children }: { children: ReactNode }) {
  return <H6Typography>{children}</H6Typography>;
}

const H1Typography = styled.h1`
  font-size: 26px;
  color: #1b1818;
  line-height: 20px;
`;

const H2Typography = styled.h2`
  font-size: 23px;
  color: #1b1818;
  line-height: 20px;
`;

const H3Typography = styled.h3`
  font-size: 20px;
  color: #1b1818;
  line-height: 20px;
`;

const H4Typography = styled.h4`
  font-size: 17px;
  color: #1b1818;
  line-height: 20px;
`;

const H5Typography = styled.h5`
  font-size: 14px;
  color: #1b1818;
  line-height: 20px;
`;

const H6Typography = styled.h6`
  font-size: 11px;
  color: #1b1818;
  line-height: 20px;
`;

export { H1, H2, H3, H4, H5, H6 };
