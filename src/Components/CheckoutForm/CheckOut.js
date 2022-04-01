import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InformationForm from './InformationForm';
import {Copyright, packages} from "../PackageSelection/PackageSelection";


const theme = createTheme();

export function CheckOut(props) {
    const packageNumber = window.location.href.split("/")[4];
    const selectedPackage = packages[packageNumber-1];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <InformationForm package={selectedPackage}/>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}