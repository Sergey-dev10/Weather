import { Container } from "@mui/material";
import {H1} from "./Main.styles.ts";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import {Settings} from "./components/Settings";
import {MainWrapper} from "./Main.styles.ts";

export const Main = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "lg",
      }}
    >
      <MainWrapper>
        <Settings />
        <H1>Local Weather</H1>
        <Search />
        <Weather />
      </MainWrapper>
    </Container>
  );
};
