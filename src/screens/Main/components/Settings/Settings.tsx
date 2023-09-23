import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  SettingsIconWrapper,
  ModalContent,
  SettingsButton,
} from "./Settings.styles.ts";
import { ToggleTempMetric } from "./components/ToggleTempMetric";
import { ToggleTheme } from "./components/ToggleTheme";

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <SettingsButton onClick={handleOpen}>
        <SettingsIconWrapper />
      </SettingsButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <h3>Settings</h3>
          <ToggleTempMetric />
          <ToggleTheme />
        </ModalContent>
      </Modal>
    </Box>
  );
};
