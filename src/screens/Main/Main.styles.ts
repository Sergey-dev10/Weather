import styled from "styled-components";
import { Box } from "@mui/system";


export const H1 = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color};
`;

export const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

`;