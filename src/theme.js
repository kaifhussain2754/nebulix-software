// src/theme.js
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode: mode, // Dynamic theme mode
  },
});

export default getTheme;
