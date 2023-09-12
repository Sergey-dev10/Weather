import styled from "styled-components";
import { TextField, FormControl } from "@mui/material";

export const SearchInput = styled(TextField)`
  .MuiInputBase-input {
    color: #c1c2c5;
  }
`;

export const FormControlWrapper = styled(FormControl)`
  display: flex;
  .MuiFormControl-root {
    border: 0.1rem solid #373a40;
    border-radius: 0.25rem;
    background-color: #25262f;
  }
`;

