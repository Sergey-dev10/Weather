import { Box } from "@mui/system";
import { Container } from "@mui/material";
import {H1} from "./Main.styles.ts";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import {Settings} from "./components/Settings";

export const Main = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "lg",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Settings />
        <H1>Local Weather</H1>
        <Search />
        <Weather />
      </Box>
    </Container>
  );
};
