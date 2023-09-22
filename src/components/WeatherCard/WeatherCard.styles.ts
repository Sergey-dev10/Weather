import styled from "styled-components";
import { Card, CardMedia, Typography } from "@mui/material";

export const CardWrapper = styled(Card)`
  &.MuiCard-root {
    width: 10.5rem;
    padding: 1.55rem;
    color: ${({ theme }) => theme.color};
    text-align: center;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    border: 0.1rem solid #373a40;
    border-radius: 0.25rem;
  }
`;

export const CardMediaWrapper = styled(CardMedia)`
  &.MuiCardMedia-root {
    width: 150px;
    height: 150px;
    text-align: center;
  }
`;

export const Time = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.55;
    text-align: center;
  }
`;

export const Temp = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.25rem;
    line-height: 1.55;
    text-align: center;
  }
`;

export const Description = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.125rem;
    line-height: 1.55;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const FeelsLike = styled(Typography)`
  &.MuiTypography-root {
    font-size: 1.125rem;
    color: #e8590c;
    text-align: center;
  }
`;
