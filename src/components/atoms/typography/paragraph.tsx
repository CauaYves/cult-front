import { ReactNode } from "react";
import styled from "styled-components";

function P({ children }: { children: ReactNode }) {
  return <PTypography>{children}</PTypography>;
}

const PTypography = styled.p`
  font-size: 13px;
  color: #1b1818;
  line-height: 16px;
`;

export { P };
