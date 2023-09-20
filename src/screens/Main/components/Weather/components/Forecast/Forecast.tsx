import { Hourly } from "./components/Hourly";
import { Daily } from "./components/Daily";
import { Box } from '@mui/material';


export const Forecast = () => {
  return (
    <Box sx={{
        mb: 10
    }}>
      <Hourly />
      <Daily />
    </Box>
  );
};
