import { Box } from "@mui/system";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import { Container } from "@mui/material";
export const Main = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 5,
        }}
      >
        <Search />
        <Weather />
      </Box>
    </Container>
  );
};
