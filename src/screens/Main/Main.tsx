import { useAppSelector } from "../../hooks";
import { Container } from "@mui/material";
import { H1, MainWrapper } from "./Main.styles.ts";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import { Settings } from "./components/Settings";
import { Message } from "./components/Search/components/Message";
import {
  selectPlaces,
  selectSearchStatus,
} from "../../modules/search/selectors.ts";
import { REQUEST_STATUS } from "../../core/api/types.ts";


export const Main = () => {
  const searchStatus = useAppSelector(selectSearchStatus);
  const places = useAppSelector(selectPlaces);

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
        {searchStatus === REQUEST_STATUS.SUCCESS && places.length === 0 ? (
          <Message />
        ) : (
          ""
        )}
        <Weather />
      </MainWrapper>
    </Container>
  );
};
