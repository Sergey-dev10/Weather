import Box from "@mui/material/Box";
import { MessageWrapper } from "./Message.styles.ts";
export const Message = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MessageWrapper>
        The location name you entered was not found.
      </MessageWrapper>
    </Box>
  );
};
