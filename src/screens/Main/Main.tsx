import { Box } from "@mui/system";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import { Container } from "@mui/material";
import {H1} from "./Main.styles.ts";

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
         <H1>Local Weather</H1>
        <Search />
        <Weather />
      </Box>
    </Container>
  );
};
