// src/contexts/ColorModeContext.js
import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';

export const ColorModeContext = createContext({
    Typography:{
        fontFamily: 'Poppins, sans-serif',
    }
});

export default function ColorModeProvider({ children }) {
const [mode, setMode] = useState('dark');

const colorMode = useMemo(
() => ({
    toggleColorMode: () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
}),
[]
);

const theme = useMemo(
() =>
    createTheme({
    palette: {
        mode,
        background: {
            default: mode === 'light' ? '#CECECE' : '#222831',
        },
        text: {
            primary: mode === 'light' ? '#222831' : '#CECECE',
        },        
    },
    }),
[mode]
);

return (
<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
    </ThemeProvider>
</ColorModeContext.Provider>
);
}

export const useThemeContext = () => useContext(ColorModeContext);

