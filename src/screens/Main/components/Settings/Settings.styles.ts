import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";


export const SettingsIconWrapper = styled(SettingsIcon)`
  &.MuiSvgIcon-root {
    color: #c1c2c5;
  }
`;

export const ModalContent = styled(Box)`
  &.MuiBox-root {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24.5rem;
    height: 8rem;
    padding: 1rem;
    transform: translate(-50%, -50%);
    background-color: #1a1b1e;
    border-radius: 0.2rem;
  }
`;

export const SettingsButton = styled(Button)`
    &.MuiButton-root {
      position: absolute;
      top: 0;
      right: 0;
    }
`;
