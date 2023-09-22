import styled from "styled-components";
import { Box } from "@mui/material";

export const LocationsWrapper = styled(Box)`
  width: 100%;
  position: absolute;
  top: 4rem;
  z-index: 1000;
  border: 0.1rem solid #373a40;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.locationsBackgroundColor};
`;
